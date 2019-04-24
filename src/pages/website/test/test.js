import React,{ Component } from 'react';
import {rootPath} from '@/service/xhr/config';
import axios from 'axios';

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
        axios.get(rootPath+'/api/test')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
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
