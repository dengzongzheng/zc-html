import React,{Component} from 'react';
import {Lifecycle, RouteContext} from 'react-router';
import './index.css';
import {categories} from '@/constant/index';
import {Link} from "react-router-dom";
import GoodsAdd from '@pages/manage/add/add';
import { LocaleProvider, DatePicker, message } from 'antd';
import xhr from '@/service/xhr/index';


function RenderTBody(props) {
    const goods = props.goods;
    if(goods.length<=0){
        return (
            <tr>
                <td colSpan="6" className="no-data">没有数据</td>
            </tr>
        )
    }else{
        return goods.map((item)=>
            <tr key={item.productNo}>
                <td>{item.productName}</td>
                <td>{item.updateDate}</td>
                <td>{item.updateDate}</td>
                <td>{item.productName}</td>
                <td>{item.productName}</td>
                <td><Link to="/manage/detail">详情</Link></td>
            </tr>
        );
    }
}

function RenderSelect(propos) {

    const categories = propos.categories;
    const items = categories.map(item=>
        <option key={item.value} value={item.value}>{item.name}</option>
    )

    return(
        <select className="select-box">{items}</select>
    )
}


function RenderPages(props) {

}

export default class ManageIndex extends Component{
    constructor(propos){
        super(propos);
        this.state = {
            categories:categories,
            goods:[
                {
                    productNo:"1",
                    productName:"龟寿图紫砂壶",
                    direction:"龟寿图紫砂壶",
                    productImage:"1.png",
                    updateDate:"2019-04-08 19:23:02"
                }
            ],
            param:{
               productName:"",
               category:"0"
            },
            totalPages:14,
            pageNo:1,
            pageSize:10,
            showPop:false
        }
        // store.dispatch("fffff",)
        // console.log(store.dispatch({type: 'GET_ACCESS_TOKEN', payLoad})
    }

    toAddGoods(){
        this.setState(state=>({
            showPop: true
        }));

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
        return(
            <div className="manage-box">
                <div className="header">
                    1231231123123
                </div>
                <div className="search-box">
                    <div className="box">
                        <input type="text" className="search" placeholder="请输入搜索条件"/><span/>
                    </div>

                    <div className="box">
                        <label>类别：</label>
                        <RenderSelect categories={this.state.categories}/>
                    </div>

                    <div className="box">
                        <button>搜索</button>
                    </div>

                    <div className="box"> <button onClick={()=>this.toAddGoods()}>+新增</button></div>
                </div>

                <div className="table-box">
                    <table className="table-style">
                        <thead className="thead">
                            <th>测试1</th>
                            <th>测试2</th>
                            <th>测试3</th>
                            <th>测试4</th>
                            <th>测试5</th>
                            <th>操作</th>
                        </thead>
                        <tbody className="tbody">
                            <RenderTBody goods={this.state.goods}></RenderTBody>
                        </tbody>

                    </table>
                </div>

                <div className="page-box">
                    <div className="page">
                        共<span className="count">0</span>条
                        <a href="#" className="page-button">&lt;</a>
                        <ul className="page-nums">
                            <li className="page-active">1</li>
                        </ul>
                        <a href="#" className="page-button">&gt;</a>
                    </div>
                </div>

                <GoodsAdd showPop={this.state.showPop} saveHandler={()=>this.saveHandler()}
                          cancelHandler={()=>this.cancelHandler()}/>
            </div>
        )

    }
}
