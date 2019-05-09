import React,{Component} from 'react';
import { Layout, Menu, Icon ,Button} from 'antd';
const { Header, Sider, Content } = Layout;
// import {Link} from "react-router-dom";
import Add from "@pages/manage/add/add"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter,
    Redirect,
    hashHistory,
    HashRouter
} from 'react-router-dom';

import './test.css';
import axios from 'axios';

export default class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }
    toggle(){
        this.setState(state=>({
            collapsed: !this.state.collapsed
        }))
    }

    validate(){
        console.log("ddddd");
        // 开始 loading
        return axios.get("http://172.16.10.166:9001/userCenter/index", {
            params: {},
            withCredentials:true
        }).then(response => {
           console.log(response)
           const data = response.data;
           if(data.code=="3"){
               location.href = data.data;
           }
        }).catch(error => {
            // 异常处理
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <a href="http://sitwww.baozhunniu.com/index">去官网</a>
                <Button type="primary" onClick={()=>this.validate()}>验证登录</Button>
            </div>
        );
    }

}
