import React,{Component} from 'react';
import {Lifecycle, RouteContext} from 'react-router';
import './index.css';
import {categories} from '@/constant/index';
import {Link} from "react-router-dom";
import GoodsAdd from '@pages/manage/add/add';
import { Button, Pagination, message,Input,Select } from 'antd';
import xhr from '@/service/xhr/index';
const Search = Input.Search;

function RenderTBody(props) {
    const goods = props.goods;
    if(goods.length<=0){
        return (
            <tr>
                <td colSpan="6" className="no-data">没有数据</td>
            </tr>
        )
    }else{
        return goods.map((item,index)=>
            <tr key={item.productNo}>
                <td>{index+1}</td>
                <td>{item.productNo}</td>
                <td>{item.productName}</td>
                <td>{item.categoryName}</td>
                <td>{item.direction}</td>
                <td><Link to="/manage/detail">详情</Link>&nbsp;<Link to="/manage/detail">修改</Link></td>
            </tr>
        );
    }
}



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
               pageSize:10
            },
            totalPage:0,
            showPop:false
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
                   totalPage:data.data.totalPage
               }));
           }
        });
    }

    toAddGoods(){
        this.setState(state=>({
            showPop: true
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
            showPop: false
        }));
    }

    cancelHandler (props){
        this.setState(state=>({
            showPop: false
        }));
    }

    render(){
        const categories = this.state.categories;
        const defaultValue = this.state.param.categoryCode;
        let items = categories.map(item=>
            <Select.Option key={item.value} value={item.value}>{item.name}</Select.Option>
        );
        items.push(<Select.Option key={0} value={0}>全部</Select.Option>);
        return(
            <div className="manage-box">
                <div className="header">
                    后台管理
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
                            <RenderTBody goods={this.state.goods}></RenderTBody>
                        </tbody>

                    </table>
                </div>

                <div className="page-box-2">
                    <Pagination defaultCurrent={this.state.param.pageNo} total={this.state.totalPage} />
                </div>

                <GoodsAdd showPop={this.state.showPop} saveHandler={()=>this.saveHandler()}
                          cancelHandler={()=>this.cancelHandler()}/>
            </div>
        )

    }
}
