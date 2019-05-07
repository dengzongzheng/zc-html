import React,{ Component } from 'react';
import './list.css';
import Header from '@components/header/header';
import Nav from '@components/nav/nav2';
import Footer from '@components/footer/footer';
import {Link} from "react-router-dom";
import {imgPath} from "@/service/xhr/config";
import {Pagination} from 'antd';
import xhr from '@/service/xhr/index';
import {categories} from '@/constant/index'

function RenderGoods(props){
    const goods = props.goods;
    const items = goods.map((item)=>
        <Link to={{pathname:"/detail",state:{productNo:item.productNo}}} key={item.productNo}>
            <div className="goods">
                <div className="img-box">
                    <img src={imgPath+item.productImages[0]} className="goods-img" alt=""/>
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



export default class WebsiteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[

            ],
            totalPages:1,
            pageNo:1,
            pageSize:10,
            totalCount:0,
            categoryCode: 1,
            categoryName:""
        }
        this.listCategory();
    }
    componentDidMount() {
        try {
            const categoryCode = this.props.location.state.category;
            this.setState(state=>({
                categoryCode:categoryCode
            }));
            console.log("aaa=="+categoryCode);
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
        let param = this.state.param;
        param["pageNo"] = page;
        param["pageSize"] = pageSize;
        this.setState(state=>({
            param:param
        }));
        this.listCategory();
    }

    listCategory(){
        let param = {};
        param["pageNo"] = this.state.pageNo;
        param["pageSize"] = this.state.pageSize;
        param["categoryCode"] = this.state.categoryCode;
        const that = this;
        xhr.get('/api/listCategory',param).then(function (data) {
            console.log(data);
            if(data.code=="1"){
                that.setState(state=>({
                    list: data.data.data,
                    totalCount: data.data.totalCount,
                    totalPages: data.data.totalPages
                }));
            }
        });
    }

    render() {
        const list = this.state.list;
        let categoryName = "";
        const categoryCode = this.state.categoryCode;
        for(let index in categories){
            if(categories[index].value==categoryCode){
                categoryName = categories[index].name;
                break;
            }
        }
        return(
            <div>
                <Header/>
                <Nav switchCategory={(value)=>this.switchCategory(value)}/>
                <div className="content-box">
                    <div className="content">
                        <div className="content-header">
                            <span className="head-line"/><label>{categoryName}</label>
                        </div>
                        <RenderGoods goods={list}></RenderGoods>
                    </div>
                    <div className="list-page-box">
                    <Pagination defaultCurrent={this.pageNo+1}
                                defaultPageSize={this.pageSize}
                                current={this.pageNo+1}
                                total={this.totalCount}
                                hideOnSinglePage={true}
                                onChange={(page,pageSize)=>this.pageChange(page,pageSize)}/>
                    </div>
                </div>
                <Footer/>

            </div>);
    }
}
