
import React from 'react';
import {Link} from 'react-router'
import $ from 'jquery'

import AddToCart from '../../common/addToCart'

class Item extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showGoodId : '',
            goodsDetail :{
                type:"",
                productsArr:[{productsArr:''}],
                title:""
            },
        }
    }

    isChangeShowGoodID(id){
        var that = this;
        var form2 ={
            cityId :2,
            goodsId : id,
            channel : 'pc'
        }
        $.ajax({
            type: 'GET',
            url: "http://api.21cake.com/?method=Goods.goodsDetail&v=1.0",
            data: form2,
            async: true,
            dataType: 'jsonp',
            success: function(data) {
                that.setState({goodsDetail:data.data}) 
            }
        })   
        this.setState({showGoodId:id})
        let height = $("body").height()
        let width =  $("body").width()
        $(".body_mast").height(height)
        $(".body_mast").width(width)
        $(".body_mast").css({display:"block"})
        $(".body_mast").on("click", function(){//关闭遮罩
            $(this).css({display:"none"})
            that.setState({showGoodId:new Date()})  
        });
    }

    render(){
        let {data} = this.props // 商品数据
        let num = this.props.path //显示那个类型的商品
        let id = this.props.id || "0" //
        let showGoods = [] //显示当前类型的那个口味
        if(id!=="0"){
            data[num-1].goods.forEach(item => {
                let goodId = item.tag_ids.split(",")
                let boo = goodId.some((item)=>{
                    if(item === id){
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
                    {showGoods.map((item,i)=>(
                        <li className="list_item" key={item.cake_goods_id}>
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
                                            }else{
                                                return ''
                                            }
                                        })
                                    }
                                </div>
                                <div className="label">
                                    {
                                        item.label.length? <img src={`http://www.21cake.com/${item.label[0].icon}`} alt={item.label[0].name}/>: ""
                                    }
                                </div>
                                <a  className="addCart" onClick={this.isChangeShowGoodID.bind(this,item.cake_goods_id)}>
                                    <i></i>
                                    加入购物车
                                </a>
                            </div>
                            {
                                this.state.showGoodId === item.cake_goods_id?<AddToCart spec={item.spec} goodsDetail={this.state.goodsDetail} _id={this.state.showGoodId} isShow="true"/>:''
                            }
                            
                        </li>
                    ))
                }
            </div>    
        )
    }
}
export default Item