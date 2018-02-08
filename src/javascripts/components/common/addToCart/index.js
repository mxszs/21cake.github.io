
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
    componentDidMount(){
        let num = -70;
        var timer = setInterval(()=>{
            if(this.refs.add_cart){
                this.refs.add_cart.style.bottom = num + "%"
            }
            num++
            if(num >= 0){
                clearInterval(timer)
            }
        },10)
    }
    //点击加入购物车后
    addToCartSccess(){
        this.props.isAddSucceed()
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
            <div ref="add_cart" className={isShow? 'show add_cart':'hide add_cart'}>
            {
                multiply_normal ? 
                <Multiply _id={_id}  img={img} name={name}  spec={this.props.spec}  data = {goodsDetail}/>
                :
                <Normal _id={_id} img={img} name={name} spec={this.props.spec} data = {goodsDetail}/>
            }
            </div>
        )
    }
}
export default connect(state=>state,(dispatch)=>{
    return{
             CartActions: bindActionCreators(CartActions,dispatch)   
    }
})(addToCart)