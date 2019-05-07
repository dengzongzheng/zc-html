import React,{ Component } from 'react';
import './about.css'
import Header from '@components/header/header';
import Nav from '@components/nav/nav';
import Footer from '@components/footer/footer';
import { Card } from 'antd';
const { Meta } = Card;
import {imgPath} from "@/service/xhr/config";

export default class About extends Component{

    constructor(props) {
        super(props);
    }


    render(){
        const img = imgPath + "304002646640177152.jpeg";
        return(
            <div>
                <Header/>
                <Nav/>
                <div className="card-box">
                    <Card
                        hoverable
                        style={{ width: 600}}
                        cover={<img alt="example" src={img} />}
                    >
                        <Meta
                            title="地址：湖北省武汉市武昌区徐东大街福星惠誉国际城"
                            description="电话：+86 15072311132"
                        />
                    </Card>

                </div>

                <Footer/>
            </div>
        )

    }
}
