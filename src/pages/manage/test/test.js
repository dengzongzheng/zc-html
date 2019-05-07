import React,{Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
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

import ManageIndex from '@pages/manage/index/index';
import Upload from '@pages/manage/upload/upload';
import './test.css'

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

    render() {
        return (
            <div>
                <Layout>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="mail">
                            <Link to="/"><span><Icon type="mail" /><span>index</span></span></Link>
                        </Menu.Item>
                        <Menu.SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
                            <Menu.MenuItemGroup>
                                <Menu.Item key="setting:1"><Link to="/upload"><span>index</span></Link></Menu.Item>
                            </Menu.MenuItemGroup>
                        </Menu.SubMenu>
                    </Menu>

                    <Layout>
                        <Header/>
                        <Content>

                        </Content>
                    </Layout>
                </Layout>

            </div>
        );
    }

}
