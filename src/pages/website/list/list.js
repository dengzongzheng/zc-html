import React,{ Component } from 'react';
import '../../../assets/css/common.css'
import './list.css'


export default class WebsiteList extends Component {
    componentDidMount() {
        console.log('----componentDidMount-----');
    }

    render() {
        return(
            <div>
                <div className="header-box">
                    <img src={require("../../../assets/images/header.png")} className="header-img" />
                </div>
                <div className="nav-box">

                    <ul>
                        <li><a href="#">磁器</a></li>
                        <li><a href="#">玉器</a></li>
                        <li><a href="#">书画</a></li>
                        <li><a href="#">杂项</a></li>
                        <li><a href="#">联系我们</a></li>
                    </ul>

                </div>
                <div className="content-box">

                    <div className="content">
                        <div className="content-header">
                            <span className="head-line"></span><label>磁器</label>
                        </div>
                        <div className="content-list">
                            <div className="goods">
                                <div className="img-box">
                                    <img src={require("../../../assets/images/1.png")} className="goods-img"/>
                                </div>
                                <div className="title">龟寿图紫砂壶</div>
                                <div className="sub-title">龟寿图紫砂壶</div>
                                <div className="goods-date">2019-04-08 19:23:02</div>
                            </div>

                            <div className="goods">
                                <div className="img-box">
                                    <img src={require("../../../assets/images/1.png")} className="goods-img"/>
                                </div>
                                <div className="title">龟寿图紫砂壶</div>
                                <div className="sub-title">龟寿图紫砂壶</div>
                                <div className="goods-date">2019-04-08 19:23:02</div>
                            </div>

                            <div className="goods">
                                <div className="img-box">
                                    <img src={require("../../../assets/images/1.png")} className="goods-img"/>
                                </div>
                                <div className="title">龟寿图紫砂壶</div>
                                <div className="sub-title">龟寿图紫砂壶</div>
                                <div className="goods-date">2019-04-08 19:23:02</div>
                            </div>

                            <div className="goods">
                                <div className="img-box">
                                    <img src={require("../../../assets/images/1.png")} className="goods-img"/>
                                </div>
                                <div className="title">龟寿图紫砂壶</div>
                                <div className="sub-title">龟寿图紫砂壶</div>
                                <div className="goods-date">2019-04-08 19:23:02</div>
                            </div>
                        </div>
                    </div>

                    <div className="page-box">
            <span className="p-num">
                <a className="pn-prev disabled"><i>&lt;</i><em>上一页</em></a>
                <a href="javascript:;" className="curr">1</a>
                <a onClick="SEARCH.page(3, true)" href="javascript:;">2</a>
                <a onClick="SEARCH.page(5, true)" href="javascript:;">3</a>
                <a onClick="SEARCH.page(7, true)" href="javascript:;">4</a>
                <a onClick="SEARCH.page(9, true)" href="javascript:;">5</a>
                <a onClick="SEARCH.page(11, true)" href="javascript:;">6</a>
                <a onClick="SEARCH.page(13, true)" href="javascript:;">7</a>
                <b className="pn-break">...</b>
                <a className="pn-next" onClick="SEARCH.page(3, true)" href="javascript:;"
                   title="使用方向键右键也可翻到下一页哦！"><em>下一页</em><i>&gt;</i></a>
            </span>
                    </div>
                </div>

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
                    COPYRIGHT © 2014-2023 XXXXX.COM CORPORATION. ALL RIGHTS RESERVED.
                </div>
            </div>);
    }
}
