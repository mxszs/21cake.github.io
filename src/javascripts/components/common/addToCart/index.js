
import React from 'react'

import Multiply from './multiply'
import Normal from './normal'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CartActions from '../../../../redux/ActionCreators/CartActions'
class addToCart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        let {isShow,_id,goodsDetail} = this.props

        let multiply_normal=[]
        if(goodsDetail.productsArr[0]){
            for(let key in goodsDetail.productsArr[0].productsArr){
                multiply_normal.push(goodsDetail.productsArr[0].productsArr[key])
            }
        }else{
            multiply_normal=[]
        }
        return(
            <div className={isShow? 'show add_cart':'hide add_cart'}>
            {
                multiply_normal.length ? 
                <Multiply spec={this.props.spec} data = {multiply_normal}/>
                :
                <Normal spec={this.props.spec} data = {goodsDetail}/>
            }
                <div className="btn-buy-add">
                    <button className="btn-buy">立即购买</button>
                    <button  className="btn-add">加入购物车</button>
                </div>
            </div>
        )
    }
}
export default connect(state=>state,(dispatch)=>{
    return{
             CartActions: bindActionCreators(CartActions,dispatch)   
    }
})(addToCart)