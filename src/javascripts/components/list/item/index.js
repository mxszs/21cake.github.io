
import React from 'react';
import {Link} from 'react-router'
import $ from 'jquery'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CartActions from '../../../../redux/ActionCreators/CartActions'
import AddToCart from '../../common/addToCart'
import AddToCartSucceed from '../../common/addToCartSucceed'

class Item extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showGoodId : '',
            goodsDetail :{
                type:"",
                productsArr:[{productsArr:{title:'',price:''}}],
                title:""
            },
            isShow:''
        }
    }

    isChangeShowGoodID(id,img,name){
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
                that.setState({showGoodId:id})
                that.isAddSucceed(data.data,img,name)
            }
        })   
    }
    changeDom(){
        let that = this
        let height = $("#root").height()
        $(".body_mast").height(height)
        $(".body_mast").on("click", function(){//关闭遮罩
            $(".body_mast").height(0)
            that.setState({showGoodId:new Date().getTime()})
        });
    }

    isAddSucceed(data,img,name){
        let ty = data ? data.type : ''
        let goods = data ? Object.keys(data.productsArr) :''
        if(ty ==="normal" && goods.length=== 1){
            this.setState({isShow:false})
            this.props.CartActions.addNumber(data.productsArr[goods[0]],img,name)
        }else{
            this.setState({isShow:true})
            this.changeDom()
        }

        if(!data){
            $(".body_mast").height(0)
            this.setState({showGoodId:new Date().getTime()})  
            this.setState({isShow:false})
        }
    }
    render(){
        let {data} = this.props // 商品数据
        let num = this.props.path //显示那个类型的商品
        let id = this.props.id || "0" //    
        let showGoods = [] //显示当前类型的那个口味
    //    console.log( this.state.goodsDetail)
        if(num){
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
        }else{
            showGoods = data
        }
        return(
                <div>
                    {showGoods.map((item,i)=>(
                        <li className="list_item" key={item.cake_goods_id}>
                            <div className="cake-item">
                                <Link className="item-img">
                                    <div><img src={`http://static.21cake.com/${item.img_url}`} alt={item.name}/></div>
                                    <p>{item.name}</p>
                                    <span>￥{item.price}/{item.spec}</span>
                                </Link>
                                <div className="label-entrance">
                                    {
                                         item.tags.map((it,i)=>{
                                            if(i<=2){
                                                return <Link to={`gallery/${it.id}`} key={it.id}>{it.content} ></Link>
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
                                <a  className="addCart" onClick={this.isChangeShowGoodID.bind(this,item.cake_goods_id,item.img_url,item.name)}>
                                    <i></i>
                                    加入购物车
                                </a>
                            </div>
                            {
                                this.state.showGoodId === item.cake_goods_id ?

                                    this.state.goodsDetail.length === 1 ?
                                    '12'
                                    :<AddToCart _id={item.cake_goods_id} name={item.name} img={item.img_url} spec={item.spec} goodsDetail={this.state.goodsDetail} _id={this.state.showGoodId} isShow="true"/>
                                    
                                    :''
                            }
                            
                        </li>
                    ))
                }
            </div>    
        )
    }
}
export default  connect(state=>state,(dispatch)=>{
    return{
        CartActions:bindActionCreators(CartActions,dispatch)
    }
})(Item)

