
import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import UserActions from '../../../redux/ActionCreators/UserActions'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navs:[
                {id:1,type:"首页",path:"/home"},
                {id:2,type:"蛋糕",path:"list/1"},
                {id:3,type:"冰淇淋",path:"list/2"},
                {id:4,type:"小切块",path:"list/3"},
                {id:5,type:"全国配送",path:"/distribution"},
                {id:6,type:"企业专区",path:"/company"} 
            ],
            city:[
                {id:1,name:"上海"},
                {id:2,name:"北京"},
                {id:3,name:"天津"},
                {id:4,name:"杭州"},
                {id:5,name:"无锡"},
                {id:6,name:"苏州"},
                {id:7,name:"广州"},
                {id:8,name:"深圳"}
            ],
            users:[
                {id:1,name:"订单管理",path:'/mine/order'},
                {id:2,name:"优惠券",path:'/mine/compun'},
                {id:3,name:"代金卡",path:'/mine/cardlist'},
                {id:4,name:"退出登录",path:''},
            ],
            cityShow:{}
        }
        this.ilss = this.ilss.bind(this)
    }

    changeCity(id){
        this.state.city.forEach((item)=>{
            if(item.id === id){
                this.setState({cityShow:item}) 
            }
        })
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.User.userLoginInfo.phone !== nextProps.User.userLoginInfo.phone) {
    //             return true;
    //     }
    // }
    ilss(){//调用actions中的方法
        this.props.UserActions.logoutHandler() 

    }
    render(){
       // console.log(this.props)
        let {navs,isMine} = this.state
        let {city} = this.state
        let cityShow = this.state.cityShow.id ? this.state.cityShow : {id:2,name:"北京"}//定位的当前城市
        localStorage.city =  JSON.stringify(cityShow)
        let {users} = this.state
        let goodNum = 0 //商品个数
        let {cars} = this.props.CartReduce
            let car = localStorage.cars?JSON.parse(localStorage.cars):[]
            cars.forEach(item=>{
               //console.log(item.price*item.num)
                //allprice+=parseFloat(item.price)*item.num
                goodNum+=item.num
            })
       // let user = []//登录信息
        let User ;
        let userLoginInfo =  localStorage.userLoginInfo?JSON.parse(localStorage.userLoginInfo):[]
        if(userLoginInfo.phone){//判断登录状态
            User =  <div>
                        <Link to="/mine"><img src="/images/header/user-img.png" alt="user"/></Link>
                        <ul className="user-login">
                            {users.map((item)=>(
                                <li  onClick={item.id===4?this.ilss:''}  key={item.id}><Link  to={item.path} key={item.id}>{item.name}</Link></li>
                            ))}
                        </ul>
                    </div>
        }else{
            User =  <div>
                <Link to="login">登录</Link>/
                <Link to="register">注册</Link>
                
            </div>
        }
        
        return(
            <header>
                <div className="header">
                    <h1 className="header-logo">
                        <a href="/" ><img src="/images/header/logo.png" alt="logo"/></a>
                    </h1>
                    <ul className="header-nav">
                        {
                            navs.map((item)=>(
                                <li key={item.id}><Link to={item.path}>{item.type}</Link></li>
                            ))
                        }
                    </ul>
                    <div className="header-city-user">
                        <div className="header-download">
                            <a>APP下载</a>
                            <span className="header-app"></span>                            
                        </div>
                        <div className="header-city">{cityShow.name}<i></i>
                            <ul className="city">
                                {
                                    city.map((item)=>{
                                        if(item.id !== cityShow.id){
                                           return  <li onClick={this.changeCity.bind(this,item.id)} key={item.id}><a>{item.name}</a></li>
                                        }else{
                                            return ''
                                        }
                                    })
                                }
                            </ul>
                        </div>
                        <div className="header-login">
                            {User}
                           
                        </div>
                        <Link to='cart' className="header-cart">
                            <i></i>
                            { goodNum?<span>{goodNum}</span>:''}
                        </Link>
                    </div>
                </div>
            </header>
        )
    }
}
 export default connect(state=>state,(dispatch)=>{
	return {
		UserActions:bindActionCreators(UserActions,dispatch)
	}
})(Header)
