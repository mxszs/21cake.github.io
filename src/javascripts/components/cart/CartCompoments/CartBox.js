
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CartActions from '../../../../redux/ActionCreators/CartActions'
const Button = (props)=>{
        return ( 
        <button className='button_con' onClick={props.headler} >{props.children}</button>
        ) 
}

class CartBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        //this.addNum = this.addNum.bind(this)
    }
    addNum(){
        this.props.CartActions.addNumber()
    }
    render(){
        let {num} = this.props.CartReduce
        let box = this.props.box
        var list = []
        for(const i in box){
            list.push(box[i])
        }
        console.log(this.props)
        return(
                <div>    
                    <ul className="thead-ul">
                        <li className="goods-ti">商品</li>
                        <li className="birthday-card-ti">生日牌</li>
                        <li className="unit-Price">单价</li>
                        <li className="number-ti">数量</li>
                        <li className="money-ti" >金额</li>
                    </ul>
                        <div className="tbody-ul">
                            <ul className='table clear'>
                                <li>
                                    <div className='table_tr'>
                                        <a className='goods_img' href=""><img src="http://static.21cake.com/public/images/ff/75/26/6bbdda4f0e24b1ab3ee31cc104f7f73f.jpg" alt=""/></a>
                                    </div>
                                    <div className="goods_cake goods">
                                        <a className='goods_space'>小切块-Heartfelt Wish心语心愿</a>
                                        <p className='goods_spec'>规格：份</p>
                                        <span className='goods_laid'><i></i>赠送 1 套餐具</span>
                                    </div>
                                    <div className='goods_brid good'></div>
                                    <div className="goods_price good">¥36.00</div>
                                    <div className="goods_num good">
                                       <Button>-</Button>
                                       <span className='_num'>{num}</span>
                                       <Button headler={this.addNum.bind(this)}>+</Button>
                                    </div>
                                    <div className='goods_prices good'>
                                            <span>¥36.00</span>
                                    </div>
                                    <span className='removeGoods good'><i></i></span>
                                </li>
                                 <li>
                                    <div className='table_tr'>
                                        <a className='goods_img' href=""><img src="http://static.21cake.com/public/images/ff/75/26/6bbdda4f0e24b1ab3ee31cc104f7f73f.jpg" alt=""/></a>
                                    </div>
                                    <div className="goods_cake goods">
                                        <a className='goods_space'>小切块-Heartfelt Wish心语心愿</a>
                                        <p className='goods_spec'>规格：份</p>
                                        <span className='goods_laid'><i></i>赠送 1 套餐具</span>
                                    </div>
                                    <div className='goods_brid good'></div>
                                    <div className="goods_price good">¥36.00</div>
                                    <div className="goods_num good">
                                       <Button>-</Button>
                                       <span className='_num'>{num}</span>
                                       <Button>+</Button>
                                    </div>
                                    <div className='goods_prices good'>
                                            <span>¥36.00</span>
                                    </div>
                                    <span className='removeGoods good'><i></i></span>
                                </li>
                                <ul className='goods_list'>
                                    {
                                    list.map(item=>(
                                        <li key={item.product_id}><img src={`http://www.21cake.com/${item.img_url}`} alt={item.name}/>
                                            <div className="right-title">
                                                <h5>{item.name}</h5><span>￥{item.price}/{item.spec}</span>
                                                <a href="#" className="action-add-to-cart" name="action-add-to-cart_12007" data-product_id={item.id} title="加入购物车"><i></i></a>
                                            </div>
                                        </li>
                                        ))
                                        
                                    }
                                   
                                </ul>
                            </ul>
                        </div>
                </div>
        )
    }
}
export default connect(state=>state,(dispatch)=>{
    return{
         CartActions:bindActionCreators(CartActions,dispatch)
    }
   
})(CartBox)
