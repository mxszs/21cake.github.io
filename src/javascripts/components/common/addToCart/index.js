
import React from 'react'

import Multiply from './multiply'
import Normal from './normal'

class addToCart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        let {isShow,goodsDetail} = this.props

        let multiply_normal;
        if(goodsDetail.productsArr[0]){
            multiply_normal = true
        }else{
            multiply_normal=false
        }
        return(
            <div className={isShow? 'show add_cart':'hide add_cart'}>
            {
                multiply_normal ? 
                <Multiply spec={this.props.spec}  data = {goodsDetail}/>
                :
                <Normal spec={this.props.spec} data = {goodsDetail}/>
            }
                <div className="btn-buy-add clear">
                    <button className="btn-buy">立即购买</button>
                    <button className="btn-add">加入购物车</button>
                </div>
            </div>
        )
    }
}
export default addToCart