import React,{Component} from 'react';
import {Lifecycle, RouteContext} from 'react-router';
import './index.css';
import '../add/add.css';
import {categories} from '@/constant/index';
import {Link} from "react-router-dom";
import {Button, Pagination, message, Input,Spin, Select, Popconfirm, Modal, Upload, Icon,InputNumber} from 'antd';
import xhr from '@/service/xhr/index';
const Search = Input.Search;
const confirm = Modal.confirm;
import * as Action from "@/store/token-action";
import {rootPath,imgPath} from "@/service/xhr/config";
import Zmage from 'react-zmage';

const { TextArea } = Input;
const uploadButton = (
    <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">上传藏品图片</div>
    </div>
);


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
            totalCount:0,
            showSearchLoading:false,
            showAddPop:false,
            showDetailPop:false,
            showEditPop:false,
            editProductNo:"",
            editParam:{
                categoryCode:0,
                categoryName:"",
                productName:"",
                visitCount: "",
                direction:"",
                productImages:[],
                productNo:""
            },
            detail:{},
            visibleAddModal:false,
            loading:false,
            previewVisible: false,
            previewImage: '',
            fileList: [

            ],
            param2:{
                categoryCode:0,
                categoryName:"",
                productName:"",
                visitCount:"",
                direction:"",
                productImages:[]
            }
        }
    }

    componentWillMount(){
        this.searchGoodsList();
    }

    searchGoodsList(){
        this.setState(state => ({showSearchLoading: true}));
        const param = this.state.param;
        const that = this;
        xhr.get('/manage/api/listGoods',param).then(function (data) {
           if(data.code==="1"){
               that.setState(state=>({
                   goods:data.data.data,
                   totalPage:data.data.totalPage,
                   totalCount:data.data.totalCount
               }));
           }
        });
        this.setState(state => ({showSearchLoading: false}));
    }


    toAddGoods(){
        this.setState(state=>({
            visibleAddModal: true
        }));

    }


    selectChange2(event){
        let param = this.state.param;
        param["categoryCode"] = event;
        param["pageNo"] = 1;
        param["pageSize"] = 10;
        const that = this;
        this.setState({
            param: param
        },()=>{
            that.searchGoodsList();
        });
    }

    onSearch(value){
        let param = this.state.param;
        param["productName"] = value;
        const that = this;
        this.setState({param: param},()=> {
            that.searchGoodsList();
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

    handleEditInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let param = this.state.editParam;
        param[name] = value;
        this.setState({
            param: param
        });
    }

    saveHandler(props){
        this.setState(state=>({
            showAddPop: false
        }));
        this.searchGoodsList();
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

    delete(productNo){
        if (!productNo) {
            return;
        }
        let param = {};
        param["productNo"] = productNo;
        param = JSON.stringify(param);
        const that = this;
        xhr.post('/manage/api/delete?productNo='+productNo,param).then(function (data) {
            console.log(data);
            if (data.code === "1" && data.data) {
                message.success("删除成功");
                that.searchGoodsList();
            }else{
                message.warning("删除失败");
            }
        });
    }

    showDeleteConfirm(productNo) {
        const that = this;
        confirm({
            title: '确定要删除该条数据?',
            content: '删除数据后将不在官网展示，数据清空。',
            cancelText:"取消",
            okText:"确认",
            onOk() {
                that.delete(productNo);
            }
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

    logout(){
        this.props.history.push('/login');
    }

    saveGoods(){
        const that = this;
        let param = this.state.param2;
        if (param.categoryCode === 0) {
            message.error('请选择藏品类别');
            return;
        }
        if (param.productName === "") {
            message.error('请输入藏品标题');
            return;
        }
        if (param.visitCount === "") {
            message.error('请输入藏品阅览量');
            return;
        }
        if (param.direction === "") {
            message.error('请输入藏品描述');
            return;
        }
        if (param.productImages.length < 1) {
            message.error('请上传藏品图片');
            return;
        }
        this.setState({ loading: true });
        let categoryName = param.categoryName;
        if(categoryName===""){
            let categoryCode =  param.categoryCode;
            for(let index in categories){
                if(categories[index].value===categoryCode){
                    categoryName = categories[index].name;
                    break;
                }
            }
            param["categoryName"] = categoryName;
        }
        xhr.post('/manage/api/saveGoods',param).then(function (data) {
            that.setState({ loading: false,visibleAddModal: false });
            that.clearAddInput()
            that.searchGoodsList();
        });
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let param = this.state.param2;
        param[name] = value;
        this.setState({
            param2: param
        });
    }

    handlePreview(file) {
        this.setState(state => ({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        }));
    }

    detailPreview(url){
        this.setState(state=>({
            previewImage:imgPath+url,
            previewVisible: true
        }));
    }


    selectChange(event,option){
        let param = this.state.param2;
        console.log(option)
        param["categoryCode"] = event;
        param["categoryName"] = option.props.children;
        this.setState({
            param2: param
        });
    }

    editSelectChange(event,option){
        let param = this.state.editParam;
        param["categoryCode"] = event;
        param["categoryName"] = option.props.children;
        this.setState({
            editParam: param
        });
    }


    handleFileSaveChange(event) {

        const response = event.file.response;
        if(response && response.code==="1"){
            let param = this.state.param2;
            let productImages =  param.productImages;
            productImages.push(response.data.fileName);
            param.productImages = productImages;
            this.setState(state=>({
                param2:param
            }));
        }
        this.setState(state=>({
            fileList:event.fileList
        }));
    }

    editHandleFileSaveChange(event) {

        const response = event.file.response;
        if(response && response.code==="1"){
            let param = this.state.editParam;
            let productImages =  param.productImages;
            productImages.push(response.data.fileName);
            param.productImages = productImages;
            this.setState(state=>({
                editParam:param
            }));
        }
        this.setState(state=>({
            fileList:event.fileList
        }));
    }

    visitCountChange(value){
        let param = this.state.param2;
        param["visitCount"] = value;
        this.setState(state=>({
            param2:param
        }));
    }

    completeHandle(e){
        console.log(e.event);
    }

    removeHandler(e){
        console.log(e)
        const imagName = e.name;
        let param = this.state.param2;
        let productImages =  param.productImages;
        for (let i = 0; i < productImages.length; i++) {
            if (productImages[i] === imagName){
                productImages.splice(i, 1);
                break;
            }
        }
        this.setState(state=>({
            param2:param
        }));
    }

    editRemoveHandler(e){
        const imageName = e.name;
        let param = this.state.editParam;
        let productImages =  param.productImages;
        for (let i = 0; i < productImages.length; i++) {
            if (productImages[i] === imageName){
                productImages.splice(i, 1);
                break;
            }
        }
        this.setState(state=>({
            editParam:param
        }));
    }

    handleOk(){
        this.saveGoods();
    }

    handleAddCancel(){
        this.clearAddInput();
    }

    clearAddInput(){
        this.setState(state=>({
            visibleAddModal: false,
            loading: false,
            fileList:[],
            param2:{
                categoryCode:0,
                categoryName:"",
                productName:"",
                visitCount:"",
                direction:"",
                productImages:[]
            }
        }));
    }

    editVisitCountChange(value){
        let param = this.state.editParam;
        param["visitCount"] = value;
        this.setState(state=>({
            editParam:param
        }));
    }

    toEdit(productNo) {
        const goods = this.state.goods;
        let data;
        for(let index in goods){
            if(goods[index].productNo===productNo){
                data = goods[index];
                break;
            }
        }
        let editParam = this.state.editParam;
        editParam.visitCount = data.visitCount;
        editParam.categoryCode = data.categoryCode;
        editParam.categoryName = data.categoryName;
        editParam.direction = data.direction;
        editParam.productName = data.productName;
        editParam.productImages = data.productImages;
        editParam.productNo = data.productNo;
        this.setState(state => ({
            showEditPop: true,
            editParam: editParam
        }));
    }

    editDeleteImage(imageName){
        let param = this.state.editParam;
        let productImages =  param.productImages;
        for (let i = 0; i < productImages.length; i++) {
            if (productImages[i] === imageName){
                productImages.splice(i, 1);
                break;
            }
        }
        this.setState(state=>({
            editParam:param
        }));
    }

    goodsEdit(){

        let param = this.state.editParam;
        let visitCount = param.visitCount;
        if(visitCount===""){
            message.error('请输入藏品阅览量');
            return;
        }
        if (param.categoryCode === 0) {
            message.error('请选择藏品类别');
            return;
        }
        if (param.productName === "") {
            message.error('请输入藏品标题');
            return;
        }
        if (param.visitCount === "") {
            message.error('请输入藏品阅览量');
            return;
        }
        if (param.direction === "") {
            message.error('请输入藏品描述');
            return;
        }
        if (param.productImages.length < 1) {
            message.error('请上传藏品图片');
            return;
        }

        const that = this;
        this.setState({ loading: true });
        xhr.post('/manage/api/updateGoods',param).then(function (data) {
            if(data.code==="1"){
                param["visitCount"] = "";
                param["productNo"] = "";
                message.success("藏品阅览量修改成功");
                that.setState({loading:false,editProductNo:"",editParam:param,showEditPop:false},()=>{
                    that.searchGoodsList();
                });
            }else{
                message.error("藏品阅览量修改失败");
            }
        });
    }

    render(){
        const {previewVisible, previewImage, fileList} = this.state;
        const categories = this.state.categories;
        let items = categories.map(item=>
            <Select.Option key={item.value} value={item.value}>{item.name}</Select.Option>
        );
        items.push(<Select.Option key={0} value={0}>请选择</Select.Option>);
        const goods = this.state.goods;
        const count = (this.state.param.pageNo - 1) * this.state.param.pageSize;
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
                    <td>{index+1+count}</td>
                    <td>{item.productNo}</td>
                    <td>{item.productName}</td>
                    <td>{item.visitCount}</td>
                    <td>{item.categoryName}</td>
                    <td>{item.direction}</td>
                    <td><a onClick={()=>this.goodsDetail(item.productNo)} href="#">详情</a>&nbsp;&nbsp;
                        <a onClick={()=>this.toEdit(item.productNo)}
                           href="#">修改</a>&nbsp;&nbsp;
                        <a onClick={()=>this.showDeleteConfirm(item.productNo)} href="#">删除</a></td>
                </tr>
            );
        }
        let images;
        if (this.state.detail.productImages) {
            images = this.state.detail.productImages.map((item,index)=>
                <Zmage alt="example" className="preview-img" key={index} src={imgPath+item}/>
            );
        }
        let editImages;
        if (this.state.editParam.productImages) {
            editImages = this.state.editParam.productImages.map((item,index)=>
                <div className={"delete-img-box"} key={item}>
                    <Zmage alt="example" className="preview-img" src={imgPath+item}/>
                    <Icon type="delete" theme="twoTone" onClick={()=>this.editDeleteImage(item)}
                          style={{fontSize: "20px",display: "block",marginTop:"4",cursor:"pointer"}} />
                </div>
            );
        }
        let loading = "";
        if (this.state.showSearchLoading) {
            loading = (
                <div className={"loading-box"}><Spin tip="Loading..."/></div>
            );
        }
        return(

            <div className="manage-box">
                {loading}
                <div className="header">
                    后台管理
                    {/*<div className=""><Link to="/">去官网</Link></div>*/}
                    <div className="logout" onClick={()=>this.logout()}>退出</div>
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
                        <Select defaultValue={this.state.param.categoryCode} type={"select"}
                                style={{ width: 200}}
                                name="categoryCode"
                                onChange={(e)=>this.selectChange2(e)}>{items}</Select>
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
                                <th>阅览量</th>
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


                <Modal
                    visible={this.state.visibleAddModal}
                    title="新增藏品"
                    onOk={()=>this.handleOk()}
                    onCancel={()=>this.handleAddCancel()}
                    footer={[
                        <Button key="back" onClick={()=>this.handleAddCancel()}>取消</Button>,
                        <Button key="submit" type="primary" loading={this.state.loading} onClick={()=>this.handleOk()}>
                            提交
                        </Button>
                    ]}
                >
                    <div className="add-row">
                        <div className="add-left">
                            <label>类别：</label>
                        </div>
                        <div className="add-right">
                            <Select defaultValue={this.state.param2.categoryCode} type={"select"}
                                    style={{ width: 400,'marginLeft':20 }}
                                    name="categoryCode"
                                    value={this.state.param2.categoryCode}
                                    onChange={(e,option)=>this.selectChange(e,option)}>{items}</Select>
                        </div>

                    </div>
                    <div className="add-row-2">
                        <div className="add-left">
                            <label>标题：</label>
                        </div>
                        <div className="add-right">
                            <TextArea rows={4} placeholder="请输入藏品标题"
                                      style={{width:400,'marginLeft':20,'marginTop':20}}
                                      name={"productName"}
                                      value={this.state.param2.productName}
                                      onChange={(e)=>this.handleInputChange(e)}/>
                        </div>

                    </div>

                    <div className="add-row">
                        <div className="add-left">
                            <label>阅览量：</label>
                        </div>
                        <div className="add-right">
                            <InputNumber min={1} placeholder="请输入阅览量" name={"visitCount"}
                                         value={this.state.param2.visitCount}
                                         onChange={(e)=>this.visitCountChange(e)} />
                        </div>

                    </div>


                    <div className="add-row-2">
                        <div className="add-left">
                            <label>描述：</label>
                        </div>
                        <div className="add-right">
                                <TextArea rows={4} placeholder="请输入藏品描述"
                                          style={{width:400,'marginLeft':20,'marginTop':20}}
                                          name={"direction"}
                                          value={this.state.param2.direction}
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
                                style={{width: '100%', height:104}}
                                fileList={this.state.fileList}
                                onPreview={(e)=>this.handlePreview(e)}
                                name={"files"}
                                data={(e)=>this.completeHandle(e)}
                                onChange={(e)=>this.handleFileSaveChange(e)}
                                onRemove={(e)=>this.removeHandler(e)}
                            >
                                {this.state.fileList.length >= 10 ? null : uploadButton}
                            </Upload>
                        </div>

                    </div>
                </Modal>

                <Modal visible={this.state.previewVisible} footer={null}
                       onCancel={()=>this.setState(state=>({previewVisible: false}))}>
                    <img alt="example" style={{width: '100%', height:86}} src={this.state.previewImage}/>
                </Modal>

                <Modal
                    visible={this.state.showDetailPop}
                    title="藏品详情"
                    onCancel={()=>this.setState(state=>({showDetailPop:false}))}
                    footer={[
                        <Button key="back" onClick={()=>this.setState(state=>({showDetailPop:false}))}>关闭</Button>,
                    ]}
                >
                    <div className="line-height">
                        <div className="add-left-2">
                            <label>类别：</label>
                        </div>
                        <div className="add-right">
                            {this.state.detail.categoryName}
                        </div>

                    </div>
                    <div className="line-height">
                        <div className="add-left-2">
                            <label>标题：</label>
                        </div>
                        <div className="add-right">
                            {this.state.detail.productName}
                        </div>

                    </div>

                    <div className="line-height">
                        <div className="add-left-2">
                            <label>阅览量：</label>
                        </div>
                        <div className="add-right">
                            {this.state.detail.visitCount}
                        </div>

                    </div>


                    <div className="line-height">
                        <div className="add-left-2">
                            <label>描述：</label>
                        </div>
                        <div className="add-right">
                            {this.state.detail.direction}
                        </div>

                    </div>

                    <div className="line-height">
                        <div className="add-left-2">
                            <label>图片：</label>
                        </div>
                        <div className="add-right">
                            {images}
                        </div>

                    </div>
                </Modal>

                <Modal
                    visible={this.state.showEditPop}
                    title="修改藏品"
                    onOk={()=>this.setState(state=>({showEditPop:false,editParam:{}}))}
                    onCancel={()=>this.setState(state=>({showEditPop:false,editParam:{}}))}
                    footer={[
                        <Button key="back" onClick={()=>this.setState(state=>({showEditPop:false,editParam:{}}))}>取消</Button>,
                        <Button key="submit" type="primary" loading={this.state.loading} onClick={()=>this.goodsEdit()}>
                            提交
                        </Button>
                    ]}
                >
                    <div className="add-row">
                        <div className="add-left">
                            <label>类别：</label>
                        </div>
                        <div className="add-right">
                            <Select defaultValue={this.state.editParam.categoryCode} type={"select"}
                                    style={{ width: 400,'marginLeft':20 }}
                                    name="categoryCode"
                                    value={this.state.editParam.categoryCode}
                                    onChange={(e,option)=>this.editSelectChange(e,option)}>{items}</Select>
                        </div>

                    </div>

                    <div className="add-row-2">
                        <div className="add-left">
                            <label>标题：</label>
                        </div>
                        <div className="add-right">
                            <TextArea rows={4} placeholder="请输入藏品标题"
                                      style={{width:400,'marginLeft':20,'marginTop':20}}
                                      name={"productName"}
                                      value={this.state.editParam.productName}
                                      onChange={(e)=>this.handleEditInputChange(e)}/>
                        </div>

                    </div>

                    <div className="add-row">
                        <div className="add-left">
                            <label>阅览量：</label>
                        </div>
                        <div className="add-right">
                            <InputNumber min={1} placeholder="请输入阅览量" name={"visitCount"}
                                         value={this.state.editParam.visitCount}
                                         onChange={(e)=>this.editVisitCountChange(e)} />
                        </div>

                    </div>

                    <div className="add-row-2">
                        <div className="add-left">
                            <label>描述：</label>
                        </div>
                        <div className="add-right">
                                <TextArea rows={4} placeholder="请输入藏品描述"
                                          style={{width:400,'marginLeft':20,'marginTop':20}}
                                          name={"direction"}
                                          value={this.state.editParam.direction}
                                          onChange={(e)=>this.handleEditInputChange(e)}/>
                        </div>

                    </div>

                    <div className="add-row-3">
                        <div className="add-left">
                            <label>图片：</label>
                        </div>
                        <div className="add-right input2">
                            {editImages}
                            <Upload
                                action={rootPath+"/file/upload"}
                                listType="picture-card"
                                style={{width: '100%', height:104}}
                                fileList={this.state.fileList}
                                onPreview={(e)=>this.handlePreview(e)}
                                name={"files"}
                                data={(e)=>this.completeHandle(e)}
                                onChange={(e)=>this.editHandleFileSaveChange(e)}
                                onRemove={(e)=>this.editRemoveHandler(e)}
                            >
                                {this.state.fileList.length >= 10 ? null : uploadButton}
                            </Upload>
                        </div>

                    </div>
                </Modal>

            </div>
        );

    }
}
