import React,{ Component } from 'react';
import './list.css';
import Header from '@components/header/header';
import Nav from '@components/nav/nav';
import Footer from '@components/footer/footer';



export default class WebsiteList extends Component {
    componentDidMount() {
        console.log('----componentDidMount-----');
    }

    render() {
        return(
            <div>
                <Header></Header>
                <Nav></Nav>
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
            <Footer></Footer>

            </div>);
    }
}
