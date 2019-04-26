import React, {Component} from 'react';
import xhr from '@/service/xhr/index';
import {categories} from '@/constant/index';
import './add.css';

function RenderSelect(propos) {

    const categories = propos.categories;
    const items = categories.map(item=>
        <option key={item.value} value={item.value}>{item.name}</option>
    )

    return(
        <select className="add-select">{items}</select>
    )
}

export default class AddGoods extends Component{
    constructor(props){
        super(props);
        this.state = {
            categories:categories
        }
        console.log(props);
    }

    saveGoods(){
        let param = {};
        param["productName"] = "测试呀";
        param["direction"] = "测试呀";
        param["categoryCode"] = 1;
        param["productImages"] = ["adfasdf","123123"];
        xhr.post('/manage/api/saveGoods',{}).then(function (data) {
            console.log("data:"+data);
        });
        this.props.saveHandler();
    }


    render(){
        if(!this.props.showPop){
            return(<div/>);
        }
        return(
            <div className="add-box" >
                <div className="pop-bg" onClick={this.props.cancelHandler}/>
                <div className="add">
                    <div className="add-title">
                        <label>新增</label>
                    </div>
                    <div className="content-add">
                        <div className="add-row">
                            <div className="add-left">
                                <label>类别：</label>
                            </div>
                            <div className="add-right">
                                <RenderSelect categories={this.state.categories}/>
                            </div>

                        </div>

                        <div className="add-row">
                            <div className="add-left">
                                <label>标题：</label>
                            </div>
                            <div className="add-right">
                                <input type="text" placeholder="请输入标题"/>
                            </div>

                        </div>


                        <div className="add-row-2">
                            <div className="add-left">
                                <label>描述：</label>
                            </div>
                            <div className="add-right">
                                <input type="textarea" className="textarea-add" placeholder="请输入描述"/>
                            </div>

                        </div>

                        <div className="add-row-2">
                            <div className="add-left">
                                <label>图片：</label>
                            </div>
                            <div className="add-right">
                                <div className="images-box"></div>
                                <div className="upload-box">
                                    <img src={require("../../../assets/images/upload.png")} className="upload-img"/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="add-button-box">
                        <button onClick={this.props.cancelHandler}>取消</button>
                        <button onClick={this.saveGoods}>保存</button>
                    </div>

                </div>



            </div>
        )
    }
}
