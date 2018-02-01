
import React from 'react'


import DbFrom from './form'

class DistriBution extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                {id:1,name:'巴西喜拉多咖啡2盒',imgUrl:'/images/national/1.jpg',price:200.00,fen:'份',num:0},
                {id:2,name:'耶加雪菲咖啡 2盒',imgUrl:'/images/national/2.jpg',price:200.00,fen:'份',num:0},
                {id:3,name:'耶加雪菲和巴西喜拉多',imgUrl:'/images/national/3.jpg',price:200.00,fen:'份',num:0},
            ],
        }
    }
    addPurchase(id){
        let data =  this.state.data
        data.forEach((item)=>{
            if(item.id===id){
                item.num ++
            }
        })
        this.setState({data:data})
    }
    
    reducePurchase(id){
        let data =  this.state.data
        data.forEach((item)=>{
            if(item.id===id){
                item.num --
            }
        })
        this.setState({data:data})
    }
    componentWillReceiveProps(nextProps){

        //当路由切换时
        if(this.props.location !== nextProps.location){
            window.scrollTo(0,0)
        }
    }
    render(){
        console.log(this.state.data)

        let showFrom = 0
        this.state.data.forEach((item)=>{
            showFrom += item.num
        })
        
        return(
            <div className="section-box distriBution">
                <div className="db-banner"></div>
                <ul className="db-section clear">
                    {
                        this.state.data.map((item,i)=>(
                            <li key={item.id}>
                                <a className="a_img">
                                    <img src={item.imgUrl} alt={item.name} />
                                    <span>{item.name}</span>
                                    <p>{item.price}/{item.fen}</p>
                                </a>
                                <button className={item.num ? "hide" : 'show' } onClick={this.addPurchase.bind(this,item.id)} >订购</button>
                                <div className={item.num? "showShop clear show" : 'showShop clear hide' }>
                                        <a onClick={this.reducePurchase.bind(this,item.id)}>-</a>
                                            <input  type="text" value={item.num}/>
                                        <a onClick={this.addPurchase.bind(this,item.id)}>+</a>
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <DbFrom showFrom={showFrom}/>

            </div>
        )
    }
}
export default DistriBution