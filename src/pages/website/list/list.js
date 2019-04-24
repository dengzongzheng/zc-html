import React,{ Component } from 'react';
import './list.css';
import Header from '@components/header/header';
import Nav from '@components/nav/nav';
import Footer from '@components/footer/footer';
import {Link} from "react-router-dom";
import {rootPath} from "@/service/xhr/config";

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

function RenderPages(props) {



    return(
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
    )
}

export default class WebsiteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[
                {
                    productNo:"1",
                    productName:"龟寿图紫砂壶",
                    direction:"龟寿图紫砂壶",
                    productImage:"1.png",
                    updateDate:"2019-04-08 19:23:02"
                }
            ],
            totalPages:14,
            pageNo:1,
            pageSize:10
        }
    }
    componentDidMount() {
        console.log('----componentDidMount-----');
    }

    render() {
        const list = this.state.list;
        return(
            <div>
                <Header></Header>
                <Nav></Nav>
                <div className="content-box">
                    <div className="content">
                        <div className="content-header">
                            <span className="head-line"></span><label>磁器</label>
                        </div>
                        <RenderGoods goods={list}></RenderGoods>
                    </div>

                    <RenderPages></RenderPages>

                </div>
            <Footer></Footer>

            </div>);
    }
}
