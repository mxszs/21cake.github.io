
import React from 'react'
import {Link} from 'react-router'
// import {connect} from 'react-redux'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navs:[
                {id:1,type:"首页",path:"/home"},
                {id:2,type:"蛋糕",path:"/cake"},
                {id:3,type:"冰淇淋",path:"/iceCream"},
                {id:4,type:"小切块",path:"/smallDice"},
                {id:5,type:"全国配送",path:"/distribution"},
                {id:6,type:"企业专区",path:""} 
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
                {id:1,name:"订单管理",path:''},
                {id:2,name:"优惠券",path:''},
                {id:3,name:"代金卡",path:''},
                {id:4,name:"退出登录",path:''},
            ]
        }
    }

    changeCity(id){
        console.log(id)
        this.state.city.forEach((item)=>{
            if(item.id === id){
                return item
            }
        })
    }



    render(){
        let {navs} = this.state
        let {city} = this.state
        let cityShow = this.changeCity() ? this.changeCity() :{id:2,name:"北京"}//定位的当前城市
        let {users} = this.state
        let goodNum = '' //商品个数
        let user = []//登录信息
        let User ;
        if(user.length){
            User =  <div>
                        <Link to="login"><img src="/images/header/user-img.png" alt="user"/></Link>
                        <ul className="user-login">
                            {users.map((item)=>(
                                <li><Link to={item.path} key={item.id}>{item.name}</Link></li>
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
                                <li key={item.id}><Link to="list">{item.type}</Link></li>
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
                                           return  <li key={item.id}><a href="javascript:void(0);">{item.name}</a></li>
                                        }
                                    })
                                }
                            </ul>
                        </div>
                        <div className="header-login">
                            {User}
                           
                        </div>
                            {goodNum}
                        <a className="header-cart">
                            <i></i>
                            { goodNum?<span>{goodNum}</span>:''}
                        </a>
                    </div>
                </div>
            </header>
        )
    }
}
// export default connect(state=>state)(Header)
export default Header