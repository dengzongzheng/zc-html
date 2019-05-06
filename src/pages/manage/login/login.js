import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { message,Input } from 'antd';
import xhr from '@/service/xhr/index';
import * as Action from "@/store/token-action";
import { connect } from "react-redux";
import './login.css';



class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            param:{
              userName:"",
              password:""
            }
        }
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let param = this.state.param;
        param[name] = value;
        this.setState({
            param: param
        });
    }

    login(){
        const userName = this.state.param.userName;
        if(""===userName){
            message.info('请输入用户名');
            return;
        }
        const password = this.state.param.password;
        if(""===password){
            message.info('请输入密码');
            return;
        }

        let param = JSON.stringify(this.state.param);
        const that = this;
        xhr.post('/api/login?userName='+userName+"&password="+password,param).then(function (data) {
            console.log(data);
            if(data.code==1){
                that.props.setAccessToken({value:data.data});
                console.log(that.props.data.accessToken);
                that.props.history.push('/manage');
            }else{
                message.info(data.message);
            }
        });

    }

    render() {
        return(
            <div className="body">
                <div className="login-box">
                    <div className="login-header">密码登录</div>
                    <div className="input-box">
                        <Input placeholder="请输入用户名" allowClear
                               onChange={(e)=>this.handleInputChange(e)}
                               name={"userName"}/>
                        <Input.Password placeholder="请输入登录密码" allowClear
                               onChange={(e)=>this.handleInputChange(e)}
                               name={"password"}/>
                    </div>

                    <div className="button-box">
                        <button onClick={() => this.login()}>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state
});

export default connect(mapStateToProps,Action)(Login);
