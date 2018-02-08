



import './stylesheets/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';


import App from './javascripts/App';
import Home from './javascripts/components/home/Home'
import List from './javascripts/components/list/List'
import Gallery from './javascripts/components/listGallery'
import DistriBution from './javascripts/components/distribution'//全国配送
import Login from './javascripts/components/login/Login'
import Cart from './javascripts/components/cart/Cart'
import Balance from './javascripts/components/balance/Balance'
import Mine from './javascripts/components/mine/Mine'
import MineInfo from './javascripts/components/mine/Merber/Info'
import MineOrder from './javascripts/components/mine/Merber/Order'
import MineAddress from './javascripts/components/mine/Merber/Address'
import MineCompun from './javascripts/components/mine/Merber/Compun'
import Cardlist from './javascripts/components/mine/Merber/Cardlist'
import Register from './javascripts/components/register/Register'
import Company from './javascripts/components/company/Company'

import registerServiceWorker from './registerServiceWorker';

import {Router,Route,IndexRedirect,hashHistory, Redirect} from 'react-router'
import {Provider} from 'react-redux'
import store from './redux/store'

let routes = <Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRedirect to="home"/>
			{/* 主页 */}
			<Route path="home" component={Home}/>
			{/* 列表 */}
			<Route path="list/:path" component={List}/>
			{/* 童趣类列表 */}
			<Route path="gallery/:id" component={Gallery}/>
			{/* 全国配送 */}			
			<Route path="distribution" component={DistriBution}/>
			{/* 登录 */}
			<Route path="login" component={Login}/>
			<Route path="cart" component={Cart}/>
			{/* 我的 */}
			<Route path="mine" component={Mine}/>
			<Route path="mine/info" component={MineInfo}/>
			<Route path="mine/address" component={MineAddress}/>
			<Route path="mine/order" component={MineOrder}/>
			<Route path="mine/compun" component={MineCompun}/>
			<Route path="mine/cardlist" component={Cardlist}/>
			{/* 结算 */}
			<Route path="balance" component={Balance}/>
			{/* 注册 */}
			<Route path="register" component={Register}/>
			<Route path="company" component={Company}/>
			<Redirect from="*" to="home"/>
		</Route>
	</Router>
</Provider>
ReactDOM.render(
	routes
, document.getElementById('root'));
registerServiceWorker();
