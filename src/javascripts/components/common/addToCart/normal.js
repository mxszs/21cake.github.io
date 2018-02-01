
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CartActions from '../../../../redux/ActionCreators/CartActions'
class Normal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            spec:this.props.spec
        }
       
    }
     
    
    changeSpec(spec){//更改磅数
        this.setState({spec:spec})
    }
    
    render(){
       // onClick={this.props.CartActions.addNumber.bind(this,goodsDetail)}
        let {data,img,name,_id} = this.props
        let normal = []
        let showNormal = {}
        for(let key in data.productsArr){
            normal.push( data.productsArr[key])
            if(data.productsArr[key].spec === this.state.spec){
                showNormal = data.productsArr[key]
            }
        }
        //console.log(_id,414141)
        return(
            <div>
          { normal.length ?
           <div>
                <h4>￥{showNormal.price}</h4>
                <div className="normal con">
                    <p>商品规格</p>
                    <ul className="clear">
                    {
                        normal.map((item,i)=>(
                            <li className={item.spec === "更多磅数" ? "hide":'show'} key={i}><a onClick={this.changeSpec.bind(this,item.spec)} className={showNormal.spec === item.spec?"activer":''}>{item.spec}<i></i></a></li>               
                        ))
                    }
                    </ul>
                </div>
            </div>
           :''}
           <div className="btn-buy-add clear">
                    <button className="btn-buy">立即购买</button>
                    <button onClick={this.props.CartActions.addNumber.bind(null,showNormal,img,name,_id)}  className="btn-add">加入购物车</button>
                </div>
        </div>
        )
    }
}

export default connect(state=>state,(dispatch)=>{
    return{
        CartActions:bindActionCreators(CartActions,dispatch)
    }
})(Normal)