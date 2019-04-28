import React,{Component} from 'react';
import { Upload, Icon, Modal,Button } from 'antd';
import xhr from '@/service/xhr/index';
import './upload.css';
import {rootPath} from "@/service/xhr/config";
import { connect } from "react-redux";
import * as Action from "@/store/token-action";


class UploadPic extends Component {

    constructor(propos){
        super(propos);
        this.state = {
            loading: false,
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: '-1',
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }]
        };
        // this.saveGoods();
    }


    handleCancel() {
        this.setState(state => ({previewVisible: false}));
    }

    handlePreview(file) {
        console.log(file);
        this.setState(state => ({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        }));
    }

    handleChange(fileList) {
        console.log(fileList);
        this.setState(state=>({
            fileList:fileList
        }));
    }

    saveGoods(){
        let param = {};
        param["productName"] = "测试呀";
        param["direction"] = "测试呀";
        param["categoryCode"] = 1;
        param["productImages"] = ["adfasdf","123123"];
        xhr.post('/manage/api/saveGoods',param).then(function (data) {
            console.log("data:"+data);
        });
        // this.props.saveHandler();
    }

    reduxTest(){
      // console.log("dddd");
      // console.log(store.getState().accessToken);
      // console.log(store.dispatch({
      //       type: "increment",
      //       value: 100
      //   }));
        this.props.setAccessToken({value:100});
        console.log(this.props.data.count);
        const  count = this.props.data.count;
        // this.setState({
        //     count:count
        // });
    }

    render() {
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { setAccessToken } = this.props;
        return (
            <div className="clearfix">
                <Upload
                    action={rootPath+"/file/upload"}
                    listType="picture-card"
                    fileList={this.state.fileList}
                    onPreview={()=>this.handlePreview}
                    onChange={()=>this.handleChange}
                >
                    {this.state.fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={this.state.previewVisible} footer={null} onCancel={()=>this.handleCancel}>
                    <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
                </Modal>

                <Button type="primary" loading={this.state.loading} onClick={()=>setAccessToken({value:100})}>
                    {this.props.data.count}
                </Button>
                {this.props.data.count}、{this.props.data.accessToken}
            </div>
        );
    }
}

const mapStateToProps = state => ({
        data: state
});

export default connect(mapStateToProps,Action)(UploadPic);
