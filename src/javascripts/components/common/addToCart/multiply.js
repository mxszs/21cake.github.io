
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CartActions from '../../../../redux/ActionCreators/CartActions'
class Multiply extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            spec:this.props.spec
        }
    }
 
    
    changeSpec(spec){//更改磅数
        this.setState({spec:spec})
    }

    // 加入购物车
    addToCart(showMultiply,img,name){
        this.props.CartActions.addNumber(showMultiply,img,name)
        //点击加入购物车后
        this.props.addToCartSccess()
    }
    render(){
        let {data,img,name,_id} = this.props 
        //console.log(data,11111111)
       // console.log(img,123111)
        let multiply = []
        let showMultiply={}
        for(let key in data.productsArr[0].productsArr){
            multiply.push(data.productsArr[0].productsArr[key])
            if(this.state.spec===data.productsArr[0].productsArr[key].spec){
               showMultiply=data.productsArr[0].productsArr[key]
            }
        }
        
        

        return(
            <div>
                 <h4>￥{showMultiply.price}</h4>
                <div className="multiply con">
                    <p>{data.title}</p>
                    <ul className="clear">
                        <li>
                            <a className="activer">
                                {data.productsArr[0].name}
                                <i></i>
                            </a>
                        </li>                          
                        <li><a>更多></a></li>
                    </ul>
                </div>
                <div className="normal con">
                    <p>商品规格</p>
                    <ul className="clear">
                        {
                            multiply.map((item,i)=>(
                                <li key={i}><a onClick={this.changeSpec.bind(this,item.spec)}  className={showMultiply.spec === item.spec?"activer":''}>{item.spec}<i></i></a></li>               
                            ))
                        }
                    </ul>
                </div> 
                <div className="btn-buy-add clear">
                    <button className="btn-buy">立即购买</button>
                    <button onClick={this.props.CartActions.addNumber.bind(null,showMultiply,img,name,_id)} className="btn-add">加入购物车</button>
                </div>
            </div>
        )
    }
}
export default connect(state=>state,(dispatch)=>{
    return{
        CartActions:bindActionCreators(CartActions,dispatch)
    }
})(Multiply)