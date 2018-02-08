
import React, { Component } from 'react';


class NewGuest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show:true
        }
    }

    render(){
        return(
            <div className={this.state.show ? 'newGuest' : 'hide'} >
                <p>新客专享</p>
                <div className="NG_con">
                    <img src="/images/city/xk.jpg" alt=""/>
                    新用户首单订购蛋糕品类实付满298元，随单赠送小切块蛋糕1份（口味随机）。
                </div>
                <div className="NG_btn">
                    <a className="NG_watch">随便看看</a>
                    <a className="NG_buy">立即购买</a>
                </div>
            </div>
        )
    }
}

export default NewGuest 