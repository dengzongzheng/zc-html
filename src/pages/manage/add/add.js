import React, {Component} from 'react';

import './add.css';

export default class AddGoods extends Component{

    render(){
        return(
            <div className="add-box">
                <div className="pop-bg"/>
                <div className="add">
                    <div className="add-title">
                        <label>新增</label>
                    </div>
                    <div className="content-add">
                        <div className="add-row">
                            <div className="add-left">
                                <label>名字：</label>
                            </div>
                            <div className="add-right">
                                <input type="text" />
                            </div>

                        </div>

                        <div className="add-row">
                            <div className="add-left">
                                <label>名字：</label>
                            </div>
                            <div className="add-right">
                                <input type="text" />
                            </div>

                        </div>


                        <div className="add-row">
                            <div className="add-left">
                                <label>名字：</label>
                            </div>
                            <div className="add-right">
                                <input type="text" />
                            </div>

                        </div>

                        <div className="add-row">
                            <div className="add-left">
                                <label>名字：</label>
                            </div>
                            <div className="add-right">
                                <input type="text" />
                            </div>

                        </div>

                    </div>

                    <div className="add-button-box">
                        <button>取消</button>
                        <button>保存</button>
                    </div>

                </div>



            </div>
        )
    }
}
