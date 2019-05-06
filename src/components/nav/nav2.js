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
                    <li onClick={()=>this.props.switchCategory(1)}>磁器</li>
                    <li onClick={()=>this.props.switchCategory(2)}>玉器</li>
                    <li onClick={()=>this.props.switchCategory(3)}>书画</li>
                    <li onClick={()=>this.props.switchCategory(4)}>杂项</li>
                    <li><Link to="/">联系我们</Link></li>
                </ul>
            </div>
        );
    }
}
