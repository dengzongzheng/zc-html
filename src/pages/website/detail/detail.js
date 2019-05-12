import React,{ Component } from 'react';
import './detail.css'
import Header from '@components/header/header';
import Nav from '@components/nav/nav';
import Footer from '@components/footer/footer';
import xhr from '@/service/xhr/index';
import {imgPath} from "@/service/xhr/config";
import Zmage from 'react-zmage'

export default class WebsiteDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            goods:{

            },
            currentImag:""
        };
    }

    componentDidMount() {
        this.detail();
    }

    detail(){
        let param = {};
        param["productNo"] = this.props.location.state.productNo;
        const that = this;
        xhr.get('/api/detail',param).then(function (data) {
            if(data.code=="1"){
                that.setState(state=>({
                    goods:data.data,
                    currentImag:data.data.productImages[0]
                }))
            }
        });
    }

    changImag(item){
        console.log(item);
        this.setState(state=>({
            currentImag:item
        }));
    }

    render() {
        const goods = this.state.goods;
        const currentImg = this.state.currentImag;
        if(!goods.productImages){
            return(<div/>);
        }
        const items = goods.productImages.map((item,index)=>
            <li className="img-hover" key={index} onClick={()=>this.changImag(item)}>
                <img alt="" src={imgPath+item} width="50" height="64" />
            </li>
        );
        const detailData = (
            <div className="detail-content-box">
                <div className="left-box">
                    <Zmage src={imgPath+currentImg} className="detail-goods-img"/>
                    <div className="spec-list" clstag="shangpin|keycount|product|lunbotu_2">
                        <a id="spec-forward" href="javascript:;" className="arrow-prev disabled">
                            <i className="sprite-arrow-prev"/>
                        </a>
                        <a id="spec-backward" href="javascript:;" className="arrow-next disabled">
                            <i className="sprite-arrow-next"/></a>
                        <div id="spec-list" className="spec-items">
                            <ul className="lh">
                                {items}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="right-box">
                    <div className="right-content">
                        <div className="detail-title">{goods.productName}</div>
                        <div className="desc">{goods.direction}</div>
                        <div className="visit">阅览量：{goods.visitCount}</div>
                    </div>
                </div>
                <div className="clear"/>
            </div>
        );
        return(
            <div>
                <Header/>
                <Nav/>
               {detailData}
                <Footer/>
            </div>
        );
    }
}
