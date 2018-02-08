import React from 'react'  
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'
import CartActions from '../../../../redux/ActionCreators/CartActions'
class CartSubmit extends React.Component{
        constructor(props){
            super(props)
            this. state = {
                isImg:false
            }
            this.changeImg = this.changeImg.bind(this)
        }
        changeImg(){
            this.setState({isImg:true})
        }
        render(){
            let {isImg} = this.state
            let {isShow} = this.props
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
                                {isShow?<span  className="cart-submit-empty">支付方式 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付宝{isImg?<p><img style={{width:'300px',height:'300px'}}
                                 src="/images/header/delv.png" alt=""/></p>:''}</span>:<span onClick={this.props.CartActions.deleteGood}  className="cart-submit-empty"><i></i>全部清空</span>}
                                <ul className="cart-total-detail"><li>商品金额：¥ {allprice}.00</li> <li>配送费：¥ {allprice<100?'12.00':'0.00'}</li> <li>活动优惠：¥ 0.00</li>
                                {isShow?<li>优惠抵扣 <span style={{color:isShow?'red':''}}>-¥ 0.00</span></li>:''}
                                {isShow?<li>果实币抵扣 <span style={{color:isShow?'red':''}}>-¥ 0.00</span></li>:''}
                                {isShow?<li>代金卡抵扣 <span style={{color:isShow?'red':''}}>-¥ 0.00</span></li>:''}
                                </ul>
                                <div className="cart-total"><span>合计：¥<span>{allprice<100?allprice+12:allprice}.00</span></span></div>
                               {isShow?<span  className="cart-balance">您总共须要支付<span style={{fontSize:'25px',color:'#ff714d',marginLeft:'5px'}}>¥{allprice}.00</span></span>:allprice < 100-0?<span className="cart-balance" id="cost-freight-tip">满¥ 100免配送费，还差¥{allprice<100?100-allprice:0}元，<Link to='list/1'>去加购 &gt;&gt;</Link> </span>:<span className="cart-balance" id="cost-freight-tip">订单已满￥100元,享免费配送服务</span>}

                               {
                                   isShow? <div onClick={this.changeImg} className="cart-submit-button"><a href="javascript:void(0);" name="action-submit-btn" id="action-submit-btn">下单结算</a></div>:
                                   <div  className="cart-submit-button"><Link to='/balance' href="javascript:void(0);" name="action-submit-btn" id="action-submit-btn">去支付</Link></div>
                               }
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
 
 
 
 
                         