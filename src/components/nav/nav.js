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
                    <li><Link to="/list?category=1"><a href="#">磁器</a></Link></li>
                    <li><Link to="/list?category=2"><a href="#">玉器</a></Link></li>
                    <li><Link to="/list?category=3"><a href="#">书画</a></Link></li>
                    <li><Link to="/list?category=4"><a href="#">杂项</a></Link></li>
                    <li><Link to="/"><a href="#">联系我们</a></Link></li>
                </ul>
            </div>
        );
    }
}
