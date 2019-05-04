import React, {Component} from 'react';
import xhr from '@/service/xhr/index';
import {categories} from '@/constant/index';
import './add.css';
import {Input, Modal, Select, Upload, Button, Icon} from 'antd';
import {rootPath} from "@/service/xhr/config";

export default class AddGoods extends Component{
    constructor(props){
        super(props);
        this.state = {
            categories:categories,
            loading: false,
            previewVisible: false,
            previewImage: '',
            fileList: [

            ],
            param:{
                categoryCode:1,
                categoryName:"",
                productName:"",
                direction:"",
                productImages:[]
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    renderSelect(propos) {

        const categories = propos.categories;
        const defaultValue = this.state.param.categoryCode;
        const items = categories.map(item=>
            <Select.Option key={item.value} value={item.value}>{item.name}</Select.Option>
        )
        return(
            <Select defaultValue={defaultValue} style={{ width: 400,'marginLeft':20 }}>{items}</Select>
        )
    }

    saveGoods(){
        let param = this.state.param;
        const that = this;
        xhr.post('/manage/api/saveGoods',param).then(function (data) {
            that.props.saveHandler();
        });
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

    handlePreview(file) {
        this.setState(state => ({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        }));
    }

    selectChange(event,option){
        let param = this.state.param;
        console.log(option)
        param["categoryCode"] = event;
        param["categoryName"] = option.props.children;
        this.setState({
            param: param
        });
    }

    handleCancel() {
        this.setState(state => ({previewVisible: false}));
    }

    handleFileSaveChange(event) {

        const response = event.file.response;
        if(response && response.code=="1"){
            let param = this.state.param;
            let productImages =  param.productImages;
            productImages.push(response.data.fileName);
            param.productImages = productImages;
            this.setState(state=>({
                param:param
            }));
        }
        this.setState(state=>({
            fileList:event.fileList
        }));

    }

    completeHandle(e){
        console.log(e.event);
    }

    render(){
        if(!this.props.showPop){
            return(<div/>);
        }
        const { TextArea } = Input;
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">上传图片</div>
            </div>
        );
        const categories = this.state.categories;
        const defaultValue = this.state.param.categoryCode;
        const items = categories.map(item=>
            <Select.Option key={item.value} value={item.value}>{item.name}</Select.Option>
        );
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
                                <Select defaultValue={defaultValue} type={"select"}
                                        style={{ width: 400,'marginLeft':20 }}
                                        name="categoryCode"
                                        onChange={(e,option)=>this.selectChange(e,option)}>{items}</Select>
                            </div>

                        </div>

                        <div className="add-row">
                            <div className="add-left">
                                <label>标题：</label>
                            </div>
                            <div className="add-right">
                                <Input placeholder="请输入标题" allowClear
                                       onChange={(e)=>this.handleInputChange(e)}
                                       name={"productName"}/>
                            </div>

                        </div>


                        <div className="add-row-2">
                            <div className="add-left">
                                <label>描述：</label>
                            </div>
                            <div className="add-right">
                                <TextArea rows={4} placeholder="请输入描述"
                                          style={{width:400,'marginLeft':20,'marginTop':20}}
                                          name={"direction"}
                                          onChange={(e)=>this.handleInputChange(e)}/>
                            </div>

                        </div>

                        <div className="add-row-3">
                            <div className="add-left">
                                <label>图片：</label>
                            </div>
                            <div className="add-right input2">
                                <Upload
                                    action={rootPath+"/file/upload"}
                                    listType="picture-card"
                                    fileList={this.state.fileList}
                                    onPreview={(e)=>this.handlePreview(e)}
                                    name={"files"}
                                    data={(e)=>this.completeHandle(e)}
                                    onChange={(e)=>this.handleFileSaveChange(e)}
                                >
                                    {this.state.fileList.length >= 10 ? null : uploadButton}
                                </Upload>
                                <Modal visible={this.state.previewVisible} footer={null} onCancel={()=>this.handleCancel()}>
                                    <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
                                </Modal>
                            </div>

                        </div>

                    </div>

                    <div className="add-button-box">
                        <button onClick={()=>this.props.cancelHandler()}>取消</button>
                        <button onClick={()=>this.saveGoods()}>保存</button>
                    </div>
                </div>
            </div>
        )
    }
}
