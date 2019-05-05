import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import './login.css';



export default class Login extends Component{

    login(){

        this.props.history.push('/manage');
    }


    render() {
        return(
            <div className="body">
                <div className="login-box">
                    <div className="login-header">密码登录</div>
                    <div className="input-box">
                        <input type="text" placeholder="用户名"/>
                        <input type="password" placeholder="请输入登录密码"/>
                    </div>

                    <div className="button-box">
                        <button onClick={() => this.login()}>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}
