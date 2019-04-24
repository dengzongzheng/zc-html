import React,{ Component } from 'react';
import '../../../assets/css/common.css'
import './detail.css'

export default class WebsiteDetail extends React.Component{
    componentDidMount() {
        console.log('----componentDidMount-----1111');
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

                <div className="detail-content-box">

                    <div className="left-box">
                        <img src={require("../../../assets/images/1.png")} className="detail-goods-img"/>
                        <div className="spec-list" clstag="shangpin|keycount|product|lunbotu_2">
                            <a id="spec-forward" href="javascript:;" className="arrow-prev disabled"><i
                                className="sprite-arrow-prev"></i></a>
                            <a id="spec-backward" href="javascript:;" className="arrow-next disabled"><i
                                className="sprite-arrow-next"></i></a>
                            <div id="spec-list" className="spec-items">
                                <ul className="lh">
                                    <li className="img-hover"><img
                                        alt="Kerven Mike 短袖t恤男士多色2019夏季潮牌韩版纯棉打底衫大码印花圆领半袖男体恤休闲上衣 T7915黑色 XL"
                                        src={require("../../../assets/images/1.png")}
                                        data-url="jfs/t1/32735/26/13243/179406/5cb9f0b1Eae6e65ce/0470dee41fb9cfc8.jpg"
                                        data-img="1" width="50" height="64" /></li>
                                    <li className="img-hover"><img
                                        alt="Kerven Mike 短袖t恤男士多色2019夏季潮牌韩版纯棉打底衫大码印花圆领半袖男体恤休闲上衣 T7915黑色 XL"
                                        src={require("../../../assets/images/1.png")}
                                        data-url="jfs/t1/32735/26/13243/179406/5cb9f0b1Eae6e65ce/0470dee41fb9cfc8.jpg"
                                        data-img="1" width="50" height="64" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="right-box">
                        <div className="right-content">
                            <div className="title">第二套人民币（小全套11张，大全套15张）</div>
                            <div className="desc">
                                第二套人民币含1分、2分、5分、1角、2角、5角、1元、2元、3元、5元、10元券，共11种面值，各一张为小全套。15种版别为大全套，其中：1分、2分、5分；1角、2角、各1种、5角2种（有水印、无水印）；1元2种（红、黑一元）、2元券1种；3元券1种；5元券3种；10元券1种。

                                第二套人民币大全套珍藏册作为一种特殊又鲜明的时代遗物，其艺术特色和文物品质注定它赋有了其他职能——强势且稳定的投资收藏品。二版人民币是在一版人民币统一全国货币的基础上，与1950年开始于1951年确定新货币设计方案，1953年印制完成，故第二套人民币亦称“53版”人民币

                                第二套人民币纸分币停止流通后，在收藏市场上价格飞涨。它打破了一套人民币中“珍品”少的这一定律，精品的数量远远超出想象，在人民币收藏中独占鳌头。
                                一张全新5分罗马文带数字纸币市场价在400-500元之间，并还存在不断上涨
                                的可能；我国纸币发行史上唯一的3元面值纸钞当前价值已超过2万元；而加长版的10元人民币，更是由于造型独特和数量稀少，从上世90年代的5000多
                                元飞涨到2013年的20万~26万元！
                            </div>
                        </div>
                    </div>

                </div>

                <div className="clear"></div>

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
            </div>
        )
    }
}
