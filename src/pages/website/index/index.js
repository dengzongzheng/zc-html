import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {imgPath} from "@/service/xhr/config";
import './index.css'
import Header from '@components/header/header';
import Nav from '@components/nav/nav';
import Footer from '@components/footer/footer';
import xhr from '@/service/xhr/index';

function RenderGoods(props){
    const goods = props.goods;
    const items = goods.map((item)=>
        <Link to={{pathname:'/detail',query:{productNo:item.productNo}}} key={item.productNo}>
            <div className="goods">
                <div className="img-box">
                    <img src={imgPath+item.productImages[0]} className="goods-img" alt=""/>
                </div>
                <div className="title">{item.productName}</div>
                <div className="sub-title">{item.direction}</div>
                <div className="goods-date">{item.update}</div>
            </div>
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
                    others: data.data.others
                }));
            }
        });
    }

    render() {
        const jades = this.state.jades;
        const porcelains = this.state.porcelains;
        const pictures = this.state.pictures;
        const others = this.state.others;

        return(
            <div>

            <Header/>
            <Nav/>
            <div className="content-box">

                <div className="content">
                    <div className="content-header">
                        <span className="head-line"/><label>磁器</label>
                        <Link to={{pathname:"/list",query: {category:1}}}>更多磁器</Link>
                    </div>
                    <RenderGoods goods={jades}/>
                </div>

                <div className="content">
                    <div className="content-header">
                        <span className="head-line"/><label>玉器</label>
                        <Link to={{pathname:"/list",query: {category:2}}}>更多玉器</Link>
                    </div>
                    <RenderGoods goods={porcelains}/>
                </div>

                <div className="content">
                    <div className="content-header">
                        <span className="head-line"/><label>书画</label>
                        <Link to={{pathname:"/list",query: {category:3}}}>更多书画</Link>
                    </div>
                    <RenderGoods goods={pictures}/>
                </div>

                <div className="content">
                    <div className="content-header">
                        <span className="head-line"/><label>杂项</label>
                        <Link to={{pathname:"/list",query: {category:4}}}>更多杂项</Link>
                    </div>
                    <RenderGoods goods={others}/>
                </div>

            </div>

            <Footer/>
        </div>);
    }
}
