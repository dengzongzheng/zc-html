import React,{ Component } from 'react';
import './us.css';
import Header from '@components/header/header';
import Nav from '@components/nav/nav';
import Footer from '@components/footer/footer';
import {imgPath} from "@/service/xhr/config";
import xhr from '@/service/xhr/index';
import {title} from '@/constant/index'

export default class About extends Component{

    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div>
                <Header/>
                <Nav/>
                <div className={"us-box"}>
                    <img src={imgPath+"about_us.jpg"} className={"us-img"}  alt={title}/>
                    <div className={"us-line"}>
                       <h1>关于我们</h1>
                    </div>
                    <div className={"us-text"}>
                        <h2>武汉臻藏网络科技有限公司</h2>
                        <p>
                            武汉臻藏网络科技有限公司（简称：武汉臻藏网），主要发展于艺术品电商，
                            是结合艺术品线上网络推广及线上交易两者同步进行，成功创建互联网时代新的艺术品交易模式。
                            武汉臻藏网络科技有限公司致力于发挥武汉的地利优势和资源优势，
                            在经济转型的新时期，发挥网络在艺术品市场中的核心作用。
                            本公司注重追求专业化服务，将艺术品市场的推动和健康发展作为公司的主要目标和任务，
                            积极推动新时期文化艺术产业的新发展。
                            在过去10年，瓷器、玉器、书画、杂项见证了中国艺术品市场的持续成长，
                            中国当代书画和当代油画更是发展日益蓬勃，同时亚洲及国际艺术藏家对中国古董的认同与日俱增。
                            在全球氛围中，中国艺术及文化已成为世界瞩目的焦点。
                        </p>


                    </div>

                </div>

                <Footer/>
            </div>
        )

    }
}
