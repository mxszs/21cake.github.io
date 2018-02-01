
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
        let {isShow,goodsDetail,img,name,_id} = this.props
        console.log(goodsDetail,11231)
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
                <Multiply _id={_id}  img={img} name={name}  spec={this.props.spec}  data = {goodsDetail}/>
                :
                <Normal _id={_id} img={img} name={name} spec={this.props.spec} data = {goodsDetail}/>
            }
                {/* <div className="btn-buy-add clear">
                    <button className="btn-buy">立即购买</button>
                    <button onClick={this.props.CartActions.addNumber.bind(this,goodsDetail)}  className="btn-add">加入购物车</button>
                </div> */}
            </div>
        )
    }
}
export default connect(state=>state,(dispatch)=>{
    return{
             CartActions: bindActionCreators(CartActions,dispatch)   
    }
})(addToCart)