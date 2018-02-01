
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'
import CartActions from '../../../../redux/ActionCreators/CartActions'
// const Button = (props)=>{
//     console.log(props,11232323211)
//         return ( 
//         <button className='button_con' onClick={props.headler} >{props.children}</button>
//         ) 
// }

class CartBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        //this.addNum = this.addNum.bind(this)
    }

    
    render(){
        let {cars} = this.props.CartReduce
        let car = localStorage.cars?JSON.parse(localStorage.cars):[]
        //console.log(cars,23434)
        let box = this.props.box
        var list = []
        for(const i in box){
            list.push(box[i])
        }
       // console.log(list,12234)
       
        return(
                <div>    
                   { car.length?<ul className="thead-ul">
                        <li className="goods-ti">商品</li>
                        <li className="birthday-card-ti">生日牌</li>
                        <li className="unit-Price">单价</li>
                        <li className="number-ti">数量</li>
                        <li className="money-ti" >金额</li>
                    </ul>:''}
                        <div className="tbody-ul">
                            <ul className='table clear'>
                                {
                               car.length? cars.map((item,i)=>(
                                   <li key={i}>
                                    <div className='table_tr'>
                                        <a className='goods_img'><img src={`http://static.21cake.com/${item.img}`} alt=""/></a>
                                    </div>
                                    <div className="goods_cake goods">
                                        <a className='goods_space'>{item.name}</a>
                                        <p className='goods_spec'>规格：{item.spec}份</p>
                                       { item.cutlery_content?<span className='goods_laid'><i></i>赠送 {String(item.cutlery_content).substr(1,2)} 套餐具</span>:''}
                                    </div>
                                    <div className='goods_brid good'></div>
                                    <div className="goods_price good">¥{item.price}</div>
                                    <div className="goods_num good">
                                       <button onClick={this.props.CartActions.reduceGood.bind(null,{id:item.id,spec:item.spec})} className={item.num===1?'button_conc':'button_con'}>-</button>
                                       <span className='_num'>{item.num}</span>
                                       <button className='button_con' onClick={this.props.CartActions.addNumber.bind(null,{id:item.id,spec:item.spec})}>+</button>
                                    </div>
                                    <div className='goods_prices good'>
                                            <span>¥{item.price*item.num}</span>
                                    </div>
                                    <span onClick={this.props.CartActions.removeGood.bind(null,{id:item.id,spec:item.spec})} className='removeGoods good'><i ></i></span>
                                </li>)):''
                                }
                                <ul className='goods_list'>
                                    {
                                   car.length? list.map(item=>(
                                        <li key={item.product_id}><img src={`http://www.21cake.com/${item.img_url}`} alt={item.name}/>
                                            <div className="right-title">
                                                <h5>{item.name}</h5><span>￥{item.price}/{item.spec}</span>
                                                <a  className="action-add-to-cart" name="action-add-to-cart_12007" data-product_id={item.product_id} title="加入购物车"><i onClick={this.props.CartActions.addNumber.bind(null,{price:item.price,spec:item.spec,id:item.product_id},item.img_url,item.name)}></i></a>
                                            </div>
                                        </li>
                                        )):''
                                        
                                    }
                                   
                                </ul>
                                {
                                    !car.length?<div className="cart-not-pro">
                                        <img src="http://static.21cake.com/themes/site/img/cartempty.png"/>
                                        <span>您的购物车里还没有商品</span>
                                        <Link to='list/1'>去购物 &gt;&gt;</Link>
                                    </div>:''
                                }
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
