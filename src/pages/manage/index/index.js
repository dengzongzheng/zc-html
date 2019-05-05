import React,{Component} from 'react';
import {Lifecycle, RouteContext} from 'react-router';
import './index.css';
import {categories} from '@/constant/index';
import {Link} from "react-router-dom";
import GoodsAdd from '@pages/manage/add/add';
import GoodsDetail from '@pages/manage/detail/detail';
import { Button, Pagination, message,Input,Select } from 'antd';
import xhr from '@/service/xhr/index';
const Search = Input.Search;


export default class ManageIndex extends Component{
    constructor(propos){
        super(propos);
        this.state = {
            categories:categories,
            goods:[
            ],
            param:{
               productName:"",
               categoryCode: 0,
               pageNo:1,
               pageSize:2
            },
            totalPage:0,
            totalCount:0,
            showAddPop:false,
            showDetailPop:false,
            showEditPop:false,
            detail:{}
        }
        this.searchGoodsList();
    }

    searchGoodsList(){
        const param = this.state.param;
        const that = this;
        xhr.get('/manage/api/listGoods',param).then(function (data) {
           console.log(data);
           if(data.code=="1"){
               that.setState(state=>({
                   goods:data.data.data,
                   totalPage:data.data.totalPage,
                   totalCount:data.data.totalCount
               }));
           }
        });
    }

    RenderTBody(props) {

    }

    toAddGoods(){
        this.setState(state=>({
            showAddPop: true
        }));

    }

    selectChange(event){
        let param = this.state.param;
        param["categoryCode"] = event;
        this.setState({
            param: param
        });
    }

    onSearch(value){
        let param = this.state.param;
        param["productName"] = value;
        this.setState(state=>({
            param: param
        }));
        this.searchGoodsList();
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let param = this.state.param;
        param[name] = value;
        this.setState({
            param: param
        });
    }

    saveHandler(props){
        this.setState(state=>({
            showAddPop: false
        }));
    }

    cancelHandler (props){
        this.setState(state=>({
            showAddPop: false
        }));
    }

    goodsDetail(productNo){
        if (!productNo) {
            return;
        }
        let param = {};
        param["productNo"] = productNo;
        const that = this;
        xhr.get('/manage/api/detail',param).then(function (data) {
            console.log(data);
            that.setState(state=>({
                showDetailPop: true,
                detail:data.data
            }));
        });
    }

    cancelDetailHandler(props){
        this.setState(state=>({
            showDetailPop: false
        }));
    }

    pageChange(page, pageSize){
        let param = this.state.param;
        param["pageNo"] = page;
        param["pageSize"] = pageSize;
        this.setState(state=>({
            param:param
        }));
        this.searchGoodsList();
    }

    render(){
        const categories = this.state.categories;
        const defaultValue = this.state.param.categoryCode;
        let items = categories.map(item=>
            <Select.Option key={item.value} value={item.value}>{item.name}</Select.Option>
        );
        items.push(<Select.Option key={0} value={0}>全部</Select.Option>);
        const goods = this.state.goods;
        let tbody;
        if(goods.length<=0){
            tbody= (
                <tr>
                    <td colSpan="6" className="no-data">没有数据</td>
                </tr>
            )
        }else{
            tbody = goods.map((item,index)=>
                <tr key={item.productNo}>
                    <td>{index+1}</td>
                    <td>{item.productNo}</td>
                    <td>{item.productName}</td>
                    <td>{item.categoryName}</td>
                    <td>{item.direction}</td>
                    <td><a onClick={()=>this.goodsDetail(item.productNo)} href="#">详情</a></td>
                </tr>
            );
        }
        return(
            <div className="manage-box">
                <div className="header">
                    后台管理
                    <div className="logout">退出</div>
                </div>
                <div className="search-box">
                    <div className="box">
                        <Search
                            placeholder="请输入搜索条件" name={"productName"}
                            onChange={(e)=>this.handleInputChange(e)}
                            onSearch={value => this.onSearch(value)}
                            style={{ width: 400 }}
                        />
                    </div>

                    <div className="box">
                        <label>类别：</label>
                        <Select defaultValue={defaultValue} type={"select"}
                                style={{ width: 200}}
                                name="categoryCode"
                                onChange={(e)=>this.selectChange(e)}>{items}</Select>
                    </div>

                    <div className="box">
                        <Button type="primary" icon="search" onClick={()=>this.searchGoodsList()}>搜索</Button>
                    </div>

                    <div className="box">
                        <Button type="primary" onClick={()=>this.toAddGoods()} icon="folder-add">新增</Button>
                    </div>
                </div>

                <div className="table-box">
                    <table className="table-style">
                        <thead className="thead">
                            <tr>
                                <th>序号</th>
                                <th>编号</th>
                                <th>标题</th>
                                <th>类别</th>
                                <th>描述</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            {tbody}
                        </tbody>

                    </table>
                </div>

                <div className="page-box-2">
                    <Pagination defaultCurrent={1}
                                defaultPageSize={this.state.param.pageSize}
                                current={this.state.param.pageNo}
                                total={this.state.totalCount}
                                onChange={(page,pageSize)=>this.pageChange(page,pageSize)}
                    />
                </div>

                <GoodsAdd  showPop={this.state.showAddPop} saveHandler={()=>this.saveHandler()}
                          cancelHandler={()=>this.cancelHandler()}/>

                <GoodsDetail showPop={this.state.showDetailPop} detail={this.state.detail}
                          cancelHandler={()=>this.cancelDetailHandler()}/>
            </div>
        )

    }
}
