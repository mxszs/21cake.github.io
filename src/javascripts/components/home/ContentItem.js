
import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CartActions from '../../../redux/ActionCreators/CartActions'
class ContentItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        let {item} = this.props
        //console.log(item,333333)
        return(
            <li >
                <img src={'http://www.21cake.com'+item.imageUrl} alt="" />
                <div>
                    <h5>{item.name}</h5>
                    <h6>{item.description}</h6>
                    <p>
                        {
                            item.tags.map((item,i)=>(
                                <Link to={`gallery/${item.id}`} key={item.id}>{item.content} ></Link>
                            ))
                        } 
                    </p>
                    <div className='cart-info'>
                        <span>¥{item.default.price}/{item.default.spec}</span>
                        <a onClick={this.props.CartActions.addNumber.bind(null,{price:item.default.price,spec:item.default.spec,id:item.id},item.imageUrl,item.name)}>加入购物车</a>
                    </div>
                </div>
            </li>
        )
    }
}
export default connect(state=>state,(dispatch)=>{
    return{
         CartActions:bindActionCreators(CartActions,dispatch)
    }
   
})(ContentItem)