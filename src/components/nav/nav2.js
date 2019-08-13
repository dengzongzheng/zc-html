import React,{ Component } from 'react';
import {Redirect,Link} from 'react-router-dom';
import './nav.css';

export default class Nav extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="nav-box">
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li onClick={()=>this.props.switchCategory(1)}>瓷器</li>
                    <li onClick={()=>this.props.switchCategory(2)}>玉器</li>
                    <li onClick={()=>this.props.switchCategory(3)}>书画</li>
                    <li onClick={()=>this.props.switchCategory(4)}>杂项</li>
                    {/*<li><Link to="/about">联系我们</Link></li>*/}
                    {/*<li><Link to="/us">关于我们</Link></li>*/}
                </ul>
            </div>
        );
    }
}
