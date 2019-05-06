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


function requireAuth(Layout, props) {
    let flag = false;
    if (flag) { // 未登录
        return <Redirect to="/login" />;
    } else {
        return <Layout {...props} />
    }
}

export default class App extends Component {
    render() {
        return (
                <div className="App">

                    <BrowserRouter history={hashHistory}>
                        <Route path="/manage" component={props => requireAuth(ManageIndex, props)} />
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
                </div>
        );
    }
}
