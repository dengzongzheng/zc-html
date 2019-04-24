import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

export default class extends Component {


    render(){
        return(<div>
            <hr className="hr" />

            <ul className="nav nav-inline">
                <li className="nav-item">
                    <span className="icon icon-bidding-lg"></span>
                    <strong>随时随地</strong><br/>
                    <strong>轻松购买</strong>
                </li>
                <li className="nav-item">
                    <span className="icon icon-special-lg"></span>
                    <strong>天天专场</strong><br/>
                    <strong>畅选无忧</strong>
                </li>
                <li className="nav-item">
                    <span className="icon icon-brand-lg"></span>
                    <strong>品牌保证</strong><br/>
                    <strong>精致服务</strong>
                </li>
                <li className="nav-item">
                    <span className="icon icon-trust-lg"></span>
                    <strong>邮币保真</strong><br/>
                    <strong>快乐收藏</strong>
                </li>
            </ul>

            <hr className="hr" />

            <div className="footer-box">
                COPYRIGHT © 2019-2022 ZHENCANGYS.COM CORPORATION. ALL RIGHTS RESERVED.
            </div>
        </div>)
    }
}
