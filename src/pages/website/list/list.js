import React,{ Component } from 'react';
import './list.css';
import Header from '@components/header/header';
import Nav from '@components/nav/nav';
import Footer from '@components/footer/footer';
import {Link} from "react-router-dom";
import {rootPath} from "@/service/xhr/config";
import {Pagination} from 'antd';
import xhr from '@/service/xhr/index';

function RenderGoods(props){
    const goods = props.goods;
    const items = goods.map((item)=>
        <Link to={"/detail/"+item.productNo} key={item.productNo}>
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
            categoryCode: this.props.match.params.code
        }
        this.listCategory();
    }
    componentDidMount() {

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
        return(
            <div>
                <Header/>
                <Nav/>
                <div className="content-box">
                    <div className="content">
                        <div className="content-header">
                            <span className="head-line"/><label>磁器</label>
                        </div>
                        <RenderGoods goods={list}></RenderGoods>
                    </div>
                    <div className="list-page-box">
                    <Pagination defaultCurrent={1}
                                defaultPageSize={this.pageSize}
                                current={this.pageNo}
                                total={this.totalCount}
                                onChange={(page,pageSize)=>this.pageChange(page,pageSize)}/>
                    </div>
                </div>
                <Footer/>

            </div>);
    }
}
