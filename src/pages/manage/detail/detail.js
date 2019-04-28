import React,{Component} from 'react';
import { Route, Redirect } from "react-router-dom";


export const PrivateRoute = ({ component: ComposedComponent, ...rest }) => {
    class Authentication extends Component {
        render() {
            let isLogin = false;
            return (
                <Route
                    {...rest}
                    render={props =>
                        !isLogin ? (
                            <Redirect to="/login"/>
                        ) : (
                            <ComposedComponent {...props} />
                        )
                    }
                />
            );
        }
    }
    return Authentication;
}
