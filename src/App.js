import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter,
} from 'react-router-dom'

import './assets/css/App.css';
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
            </div>
        );
    }
}

export default App;
