import React,{Component} from 'react';
import './index.css';
import {Link} from "react-router-dom";
import GoodsAdd from '@pages/manage/add/add';

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
            </tr>
        );
    }
}


function RenderPages(props) {

}

export default class ManageIndex extends Component{
    constructor(propos){
        super(propos);
        this.state = {
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
            pageSize:10
        }
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
                        <select className="select-box">
                            <option>全部</option>
                            <option>1类</option>
                            <option>1类</option>
                            <option>1类</option>
                            <option>1类</option>
                        </select>
                    </div>

                    <div className="box">
                        <button>搜索</button>
                    </div>

                    <div className="box"> <button>+新增</button></div>
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

                <GoodsAdd/>
            </div>
        )

    }
}
