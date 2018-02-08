
import React from 'react'

import {Link} from "react-router"

class AddToCartSucceed extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isShow:'',
            time:''
        }
    }
    componentWillReceiveProps(){
        this.setState({isShow:true})
        let num = -50;
        var timer = setInterval(()=>{
            if(this.refs.add_succeed){
                this.refs.add_succeed.style.bottom = num + "%"
            }
            num++
            if(num >= 0){
                clearInterval(timer)
            }
        },10)
        setTimeout(() => {
            this.setState({isShow:false,time:new Date().getTime()})
        }, 2500);
    }


    render(){
        let {isShow} = this.state 
       
        return(
            <div ref="add_succeed" className={isShow ? "add_succeed show" : "add_succeed hide"}>
                <p><i></i>成功添加购物车</p>
                <Link to="cart">查看购物车</Link>
            </div>
        )
    }
}
export default AddToCartSucceed