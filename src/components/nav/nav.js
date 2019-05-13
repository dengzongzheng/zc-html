import React,{ Component } from 'react';
import {Redirect,Link} from 'react-router-dom';
import './nav.css';

export default class Nav extends Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    toOtherCategory(categoryCode){
        console.log(categoryCode);
        if (this.props.switchCategory) {
            this.props.switchCategory();
        }else{
            this.props.history.push("/list",{})
        }
    }

    render(){
        return (
            <div className="nav-box">
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to={{pathname:"/list",state: {category:1}}}>瓷器</Link></li>
                    <li><Link to={{pathname:"/list",state: {category:2}}}>玉器</Link></li>
                    <li><Link to={{pathname:"/list",state: {category:3}}}>书画</Link></li>
                    <li><Link to={{pathname:"/list",state: {category:4}}}>杂项</Link></li>
                    <li><Link to="/about">联系我们</Link></li>
                    <li><Link to="/us">关于我们</Link></li>
                </ul>
            </div>
        );
    }
}
