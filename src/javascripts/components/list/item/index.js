
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
        let num = this.props.path
        let id = this.props.id || "0"
        let showGoods = []
        if(id!=="0"){
            data[num-1].goods.forEach(item => {
                let goodId = item.tag_ids.split(",")
                let boo = goodId.some((item)=>{
                    if(item == id){
                        return true
                    }else{
                        return false
                    }
                })
                if(boo){
                    showGoods.push(item)
                }
            });
        }else{
            showGoods = data[num-1].goods
        }
        return(
            <div>
                {
                    showGoods.map((item)=>(
                        <li key={item.cake_goods_id}>
                            <div className="cake-item">
                                <Link className="item-img">
                                    <img src={`http://static.21cake.com/${item.img_url}`} alt={item.name}/>
                                    <h3>{item.name}</h3>
                                    <span>￥{item.price}/{item.spec}</span>
                                </Link>
                                <div className="label-entrance">
                                    {
                                        item.tags.map((it,i)=>{
                                            if(i<=2){
                                                return <Link key={it.id}>{it.content} ></Link>
                                            }
                                        })
                                    }
                                </div>
                                <div className="label">
                                    {
                                        item.label.length? <img src={`http://www.21cake.com/${item.label[0].icon}`} alt={item.label[0].name}/>: ""
                                    }
                                </div>
                                <a href="javascript:void(0);" className="addCart">
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