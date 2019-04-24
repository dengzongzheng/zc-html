import React,{ Component } from 'react';
import './detail.css'
import Header from '@components/header/header';
import Nav from '@components/nav/nav';
import Footer from '@components/footer/footer';
import {rootPath} from "@/service/xhr/config";

function RenderDetail(props) {
    const goods = props.goods;

    const items = goods.productImages.map(item=>
        <li className="img-hover">
            <img alt="" src={rootPath+"/"+item} width="50" height="64" />
        </li>
    )

    return(
        <div className="detail-content-box">
            <div className="left-box">
                <img src={rootPath+"/"+goods.productImage} className="detail-goods-img"/>
                <div className="spec-list" clstag="shangpin|keycount|product|lunbotu_2">
                    <a id="spec-forward" href="javascript:;" className="arrow-prev disabled">
                        <i className="sprite-arrow-prev"></i>
                    </a>
                    <a id="spec-backward" href="javascript:;" className="arrow-next disabled">
                        <i className="sprite-arrow-next"></i></a>
                    <div id="spec-list" className="spec-items">
                        <ul className="lh">
                            {items}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="right-box">
                <div className="right-content">
                    <div className="detail-title">{goods.productName}</div>
                    <div className="desc">{goods.direction}</div>
                </div>
            </div>
            <div className="clear"></div>
        </div>
    )
}

export default class WebsiteDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            goods:{
                productNo:"1",
                productName:"短袖t恤男士多色2019夏季潮牌韩版纯棉打底衫大码印花圆领半袖男体恤休闲上衣",
                direction:"短袖t恤男士多色2019夏季潮牌韩版纯棉打底衫大码印花圆领半袖男体恤休闲上衣",
                productImage:"1.png",
                productImages:["1.png","1.png"]
            }
        };
    }

    componentDidMount() {

    }

    render() {
        const goods = this.state.goods;
        return(
            <div>
                <Header></Header>
                <Nav></Nav>
                <RenderDetail goods={goods}></RenderDetail>
                <Footer></Footer>
            </div>
        );
    }
}