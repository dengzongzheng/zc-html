import React,{ Component } from 'react';
import {Link } from "react-router-dom";
import './header.css';

export default class Header extends Component{
    render() {
        return(
            <Link to="/">
                <div className="header-box"/>
            </Link>
        );
    }

}
