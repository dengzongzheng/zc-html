import React,{ Component } from 'react';
import xhr from '@/service/xhr/index'

export default class WebsiteList extends Component {
    constructor(props) {
        super(props);
        console.log("dddddddd");
        this.state = {
            list: []
        };
        this.getList();
    }

    getList(param){
       xhr.get('/api/test',{}).then(function (data) {
           console.log("data:"+data);
       });

    }

    render() {
        const listItems = this.state.list.map((value) =>
            <li>{value}</li>
        );
        return(<div>
            <ul>
                {listItems}
            </ul>
        </div>);
    }
}
