import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    withRouter,
    Redirect,
    hashHistory,
    HashRouter
} from 'react-router-dom';

import ManageIndex from '@pages/manage/index/index';
import '@/assets/css/common.css';
import "antd/dist/antd.css";
import routers from '@/routers/index';
import * as Action from "@/store/token-action";
import { connect } from "react-redux";
import {BackTop } from 'antd';


// function requireAuth(Layout, props) {
//     let flag = false;
//     console.log(props.data.accessToken);
//     if (flag) { // 未登录
//         return <Redirect to="/login" />;
//     } else {
//         return <Layout {...props} />
//     }
// }

class App extends Component {

    constructor(props){
        super(props);
    }

    requireAuth(Layout, props) {
        let flag = ""===this.props.data.accessToken;
        if (flag) { // 未登录
            return <Redirect to="/login" />;
        } else {
            return <Layout {...props} />
        }
    }

    render() {
        return (
                <div className="App">

                    <BrowserRouter history={hashHistory}>
                        <Route path="/manage" component={props => this.requireAuth(ManageIndex, props)} />
                        {
                            routers.map((route,index) => {
                                return(
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.component}/>
                                )
                            })
                        }

                    </BrowserRouter>
                    <BackTop />
                </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state
});

export default connect(mapStateToProps,Action)(App);
