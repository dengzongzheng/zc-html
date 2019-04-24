import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {rootPath} from "@/service/xhr/config";
import './index.css'
import Header from '@components/header/header';
import Nav from '@components/nav/nav';
import Footer from '@components/footer/footer';

function RenderGoods(props){
    const goods = props.goods;
    const items = goods.map((item)=>
        <Link to={"/detail?productNo="+item.productNo} key={item.productNo}>
            <div className="goods">
                <div className="img-box">
                    <img src={rootPath+"/"+item.productImage} className="goods-img" alt=""/>
                </div>
                <div className="title">{item.productName}</div>
                <div className="sub-title">{item.direction}</div>
                <div className="goods-date">{item.update}</div>
            </div>
        </Link>
    );
    return(
        <div className="content-list">
            {items}
        </div>
    )
}

export default class WebsiteIndex extends Component {
    constructor(props) {
        super(props);
        this.state={
            jades:[
                {
                    productNo:"1",
                    productName:"龟寿图紫砂壶",
                    direction:"龟寿图紫砂壶",
                    productImage:"1.png",
                    updateDate:"2019-04-08 19:23:02"
                }
            ],
            porcelains:[
                {
                    productNo:"1",
                    productName:"龟寿图紫砂壶",
                    direction:"龟寿图紫砂壶",
                    productImage:"1.png",
                    updateDate:"2019-04-08 19:23:02"
                }
            ],
            pictures:[
                {
                    productNo:"1",
                    productName:"龟寿图紫砂壶",
                    direction:"龟寿图紫砂壶",
                    productImage:"1.png",
                    updateDate:"2019-04-08 19:23:02"
                }
            ],
            others:[
                {
                    productNo:"1",
                    productName:"龟寿图紫砂壶",
                    direction:"龟寿图紫砂壶",
                    productImage:"1.png",
                    updateDate:"2019-04-08 19:23:02"
                }
            ]
        }
    }
    componentDidMount() {

    }



    render() {
        const jades = this.state.jades;
        const porcelains = this.state.porcelains;
        const pictures = this.state.pictures;
        const others = this.state.others;

        return(
            <div>

            <Header></Header>
            <Nav></Nav>
            <div className="content-box">

                <div className="content">
                    <div className="content-header">
                        <span className="head-line"></span><label>磁器</label>
                        <Link to="/list?category=1"><a href="#">更多磁器</a></Link>
                    </div>
                    <RenderGoods goods={jades}></RenderGoods>
                </div>

                <div className="content">
                    <div className="content-header">
                        <span className="head-line"></span><label>玉器</label>
                        <a href="#">更多玉器</a>
                    </div>
                    <RenderGoods goods={porcelains}></RenderGoods>
                </div>

                <div className="content">
                    <div className="content-header">
                        <span className="head-line"></span><label>书画</label>
                        <a href="#">更多书画</a>
                    </div>
                    <RenderGoods goods={pictures}></RenderGoods>
                </div>

                <div className="content">
                    <div className="content-header">
                        <span className="head-line"></span><label>杂项</label>
                        <a href="#">更多杂项</a>
                    </div>
                    <RenderGoods goods={others}></RenderGoods>
                </div>

            </div>

            <Footer></Footer>
        </div>);
    }
}
