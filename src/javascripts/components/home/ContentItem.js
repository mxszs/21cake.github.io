
import React from 'react'
import {Link} from 'react-router'

class ContentItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        let {item} = this.props
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
                        <a >加入购物车</a>
                    </div>
                </div>
            </li>
        )
    }
}
export default ContentItem