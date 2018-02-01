import React from 'react'  
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'
import CartActions from '../../../../redux/ActionCreators/CartActions'
class CartSubmit extends React.Component{
        constructor(props){
            super(props)
            this. state = {

            }
        }
        render(){
            let {cars} = this.props.CartReduce
            let car = localStorage.cars?JSON.parse(localStorage.cars):[]
            let allprice=0,allnum=0
            car.forEach(item=>{
               //console.log(item.price*item.num)
                allprice+=parseFloat(item.price)*item.num
                allnum+=item.num
            })

            return(
                <div>
                   { car.length? <div className="cart-submit cart-area">
                                <span onClick={this.props.CartActions.deleteGood}  className="cart-submit-empty"><i></i>全部清空</span>
                                <ul className="cart-total-detail"><li>商品金额：¥ {allprice}</li> <li>配送费：¥ {allprice<100?'12.00':'0.00'}</li> <li>活动优惠：¥ 0.00</li></ul>
                                <div className="cart-total"><span>合计：¥<span>{allprice<100?allprice+12:allprice}</span></span></div>
                                {allprice < 100-0?<span className="cart-balance" id="cost-freight-tip">满¥ 100免配送费，还差¥45元，<Link to='list/1'>去加购 &gt;&gt;</Link> </span>:<span className="cart-balance" id="cost-freight-tip">订单已满￥100元,享免费配送服务</span>}

                                <div className="cart-submit-button"><a href="javascript:void(0);" name="action-submit-btn" id="action-submit-btn">去结算</a></div>
                     </div>:''}
                </div>
            )
        }
 }
export default connect(state=>state,(dispatch)=>{
    return{
         CartActions:bindActionCreators(CartActions,dispatch)
    }
   
})(CartSubmit)
 
 
 
 
                         