import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter,
    hashHistory,
    HashRouter
} from 'react-router-dom'


import '@/assets/css/common.css';
import routers from '@/routers/index';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <main>
                        <Switch>
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
                        </Switch>
                    </main>
                </Router>
                <HashRouter history={hashHistory}/>
            </div>
        );
    }
}

export default App;
