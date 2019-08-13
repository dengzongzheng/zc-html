import React,{ Component } from 'react';
import './list.css';
import Header from '@components/header/header';
import Nav from '@components/nav/nav';
import Footer from '@components/footer/footer';
import {Link} from "react-router-dom";
import {imgPath} from "@/service/xhr/config";
import {Col, Pagination,Empty} from 'antd';
import xhr from '@/service/xhr/index';
import {categories} from '@/constant/index'

function RenderGoods(props){
    const goods = props.goods;
    if (goods.length < 1) {
        return (
            <Empty description={"未搜索到相关数据"}/>
        )
    }
    const items = goods.map((item)=>

        <Link to={{pathname:'/detail',state:{productNo:item.productNo}}} key={item.productNo}>
            <Col className="gutter-row" span={6}>
                <div className="goods">
                    <div className="img-box">
                        <img src={imgPath+item.productImages[0]} className="goods-img" alt=""/>
                    </div>
                    <div className="title">{item.productName}</div>
                    <div className="sub-title">{item.direction}</div>
                    {/*<div className="sub-price">价格:{item.price}</div>*/}
                </div>
            </Col>
        </Link>
    );
    return(
        <div className="content-list">
            {items}
        </div>
    )
}



export default class WebsiteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[

            ],
            totalPages:1,
            pageNo:1,
            pageSize:8,
            totalCount:0,
            param: ""
        }
    }
    componentDidMount() {
        try {
            const param = this.props.location.state.param;
            const that = this;
            this.setState(state=>({
                param:param
            }),()=>{
                that.listCategory();
            });
        }catch (e) {

        }
    }

    switchCategory(categoryCode){
        const that = this;
        this.setState({categoryCode:categoryCode},()=>{
            that.listCategory();
        });

    }

    pageChange(page, pageSize){
        this.setState(state=>({
            pageNo:page,
            pageSize:pageSize
        }),()=>this.listCategory());

    }

    listCategory(){
        let param = {};
        param["pageNo"] = this.state.pageNo;
        param["pageSize"] = this.state.pageSize;
        param["param"] = this.state.param;
        const that = this;
        xhr.get('/api/search',param).then(function (data) {
            if(data.code==="1"){
                that.setState(state=>({
                    list: data.data.data,
                    totalCount: data.data.totalCount,
                    totalPages: data.data.totalPage,
                }));
            }
        });
    }

    render() {
        const list = this.state.list;
        return(
            <div>
                <Header/>
                <Nav switchCategory={(value)=>this.switchCategory(value)}/>
                <div className="content-box">
                    <div className="content-header">
                        <span className="head-line"/><label>{"搜索结果"}</label>
                    </div>
                    <RenderGoods goods={list}/>
                    <div className="list-page-box">

                        <Pagination defaultCurrent={1}
                                    defaultPageSize={this.state.pageSize}
                                    current={this.state.pageNo}
                                    total={this.state.totalCount}
                                    hideOnSinglePage={true}
                                    onChange={(page,pageSize)=>this.pageChange(page,pageSize)}
                        />
                    </div>
                </div>
                <Footer/>

            </div>);
    }
}
