import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {imgPath} from "@/service/xhr/config";
import './index.css'
import Header from '@components/header/header';
import Nav from '@components/nav/nav';
import Footer from '@components/footer/footer';
import xhr from '@/service/xhr/index';
import { Carousel,Row, Col } from 'antd';


function RenderGoods2(props){
    const goods = props.goods;
    const items = goods.map((item)=>

        <Link to={{pathname:'/detail',state:{productNo:item.productNo}}} key={item.productNo}>
            <Col className="gutter-row" span={8}>
                <div className="goods">
                    <div className="img-box">
                        <img src={imgPath+item.productImages[0]} className="goods-img" alt=""/>
                    </div>
                    <div className="title">{item.productName}</div>
                    <div className="sub-title">{item.direction}</div>
                    <div className="goods-date">{item.updateDate}</div>
                </div>
            </Col>
        </Link>
    );
    return(
        <div className="content-list">
            {items}
        </div>
    )
}

export default class WebsiteIndex extends Component {
    constructor(props) {
        super(props);
        this.state={
            jades:[

            ],
            porcelains:[

            ],
            pictures:[

            ],
            others:[

            ],
            recommended:[

            ]
        }
    }
    componentDidMount() {
        this.listHome();
    }

    listHome(){
        let param = {};
        const that = this;
        xhr.get('/api/listHome',param).then(function (data) {
            console.log(data);
            if(data.code=="1"){
                that.setState(state=>({
                    jades: data.data.jades,
                    porcelains: data.data.porcelains,
                    pictures: data.data.pictures,
                    others: data.data.others,
                    recommended:data.data.recommended
                }));
            }
        });
    }

    render() {
        const jades = this.state.jades;
        const porcelains = this.state.porcelains;
        const pictures = this.state.pictures;
        const others = this.state.others;
        const recommended = this.state.recommended;
        return(
            <div>

            <Header/>
            <Nav/>
            <div className="content-box-swapper">
                <Carousel effect="fade" autoplay={true} dots={true}>
                    <div className="swapper-img2"><img src={imgPath+"swaper1.jpg"}/></div>
                    <div className="swapper-img2"><img src={imgPath+"swaper2.jpg"}/></div>
                </Carousel>
            </div>

            <div className="content-box">

                <div className="content-header">
                    <span className="head-line"/><label>重点推荐</label>
                </div>
                <Row gutter={16}>
                    <RenderGoods2 goods={recommended}/>
                </Row>

                <div className="content-header">
                    <span className="head-line"/><label>磁器</label>
                    <Link to={{pathname:"/list",state: {category:1}}}>更多磁器</Link>
                </div>
                <Row gutter={16}>
                    <RenderGoods2 goods={jades}/>
                </Row>

                <div className="content-header">
                    <span className="head-line"/><label>玉器</label>
                    <Link to={{pathname:"/list",state: {category:2}}}>更多玉器</Link>
                </div>
                <Row gutter={16}>
                    <RenderGoods2 goods={porcelains}/>
                </Row>

                <div className="content-header">
                    <span className="head-line"/><label>书画</label>
                    <Link to={{pathname:"/list",state: {category:3}}}>更多书画</Link>
                </div>
                <Row gutter={16}>
                    <RenderGoods2 goods={pictures}/>
                </Row>

                <div className="content-header">
                    <span className="head-line"/><label>杂项</label>
                    <Link to={{pathname:"/list",state: {category:4}}}>更多杂项</Link>
                </div>
                <Row gutter={16}>
                    <RenderGoods2 goods={others}/>
                </Row>

            </div>

            <Footer/>

        </div>);
    }
}
