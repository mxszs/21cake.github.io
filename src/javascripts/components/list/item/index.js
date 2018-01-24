
import React from 'react';
import {Link} from 'react-router'

class Item extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        let {data} = this.props
        return(
            <div>
                {
                    data.map((item)=>(
                        <li key={item.cake_goods_id}>
                            <div className="cake-item">
                                <Link className="item-img">
                                    <img src={`http://static.21cake.com/${item.img_url}`} alt={item.name}/>
                                    <h3>{item.name}</h3>
                                    <span>￥{item.price}/{item.spec}</span>
                                </Link>
                                <div className="label-entrance">
                                    {
                                        item.tags.map((it)=>(
                                            <Link key={it.id}>{it.content} ></Link>
                                        ))
                                    }
                                </div>
                                <div className="label">
                                    <img src={`http://www.21cake.com${item.label[0].icon}`} alt={item.label[0].name}/>
                                </div>
                                <a href="javascript:;" className="addCart">
                                    <i></i>
                                    加入购物车
                                </a>
                            </div>
                        </li>
                    ))
                }
            </div>
        )
    }
}
export default Item