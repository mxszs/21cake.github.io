import React from 'react'  

class CartSubmit extends React.Component{
        constructor(props){
            super(props)
            this. state = {

            }
        }
        render(){
            return(
                <div className="cart-submit cart-area">
                                <a href="#" className="cart-submit-empty"><i></i>全部清空</a>
                                <ul className="cart-total-detail"><li>商品金额：¥ 55.00</li> <li>配送费：¥ 12.00</li> <li>活动优惠：¥ 0.00</li></ul>
                                <div className="cart-total"><span>合计：¥<span>67.00</span></span></div>
                                <span className="cart-balance" id="cost-freight-tip">满¥ 100免配送费，还差¥45元，<a href="/">去加购 &gt;&gt;</a> </span>

                                <div className="cart-submit-button"><a href="javascript:void(0);" name="action-submit-btn" id="action-submit-btn">去结算</a></div>
                </div>
            )
        }
 }
    export default CartSubmit
 
 
 
 
                         