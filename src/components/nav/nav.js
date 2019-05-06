import React,{ Component } from 'react';
import {Link } from "react-router-dom";
import './nav.css';

export default class Nav extends Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="nav-box">
                <ul>
                    <li><Link to={{pathname:"/list",state: {category:1}}}>磁器</Link></li>
                    <li><Link to={{pathname:"/list",state: {category:2}}}>玉器</Link></li>
                    <li><Link to={{pathname:"/list",state: {category:3}}}>书画</Link></li>
                    <li><Link to={{pathname:"/list",state: {category:4}}}>杂项</Link></li>
                    <li><Link to="/">联系我们</Link></li>
                </ul>
            </div>
        );
    }
}
