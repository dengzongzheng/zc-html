import React, {Component} from 'react';
import xhr from '@/service/xhr/index';
import {categories} from '@/constant/index';
import './detail.css';
import {Input, Modal, Select, Upload, Button, Icon} from 'antd';
import {imgPath} from "@/service/xhr/config";

export default class AddGoods extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            previewVisible: false,
            previewImage: '',
            fileList: [

            ]
        }
    }

    handleCancel() {
        this.setState(state => ({previewVisible: false}));
    }

    render(){
        if(!this.props.showPop){
            return(<div/>);
        }
        const images = this.props.detail.productImages.map((item,index)=>
            <img alt="example" className="preview-img" key={index} src={imgPath+item}/>
        );
        return(
            <div className="add-box" >
                <div className="pop-bg" onClick={this.props.cancelHandler}/>
                <div className="add">
                    <div className="add-title">
                        <label>详情</label>
                    </div>
                    <div className="content-add">
                        <div className="add-row">
                            <div className="add-left">
                                <label>类别：</label>
                            </div>
                            <div className="add-right">
                                {this.props.detail.categoryName}
                            </div>

                        </div>

                        <div className="add-row">
                            <div className="add-left">
                                <label>标题：</label>
                            </div>
                            <div className="add-right">
                                {this.props.detail.productName}
                            </div>

                        </div>


                        <div className="add-row-2">
                            <div className="add-left">
                                <label>描述：</label>
                            </div>
                            <div className="add-right">
                                {this.props.detail.direction}
                            </div>

                        </div>

                        <div className="add-row-3">
                            <div className="add-left">
                                <label>图片：</label>
                            </div>
                            <div className="add-right input2">
                                {images}
                            </div>

                        </div>

                    </div>

                    <div className="add-button-box">
                        <button onClick={()=>this.props.cancelHandler()}>关闭</button>
                    </div>
                </div>
            </div>
        )
    }
}
