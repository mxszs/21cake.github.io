



import './stylesheets/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';


import App from './javascripts/App';
import Home from './javascripts/components/home/Home'
import List from './javascripts/components/list/List'
import Login from './javascripts/components/login/Login'
import Mine from './javascripts/components/mine/Mine'
import Register from './javascripts/components/register/Register'



import registerServiceWorker from './registerServiceWorker';

import {Router,Route,IndexRedirect,hashHistory, Redirect} from 'react-router'
import {Provider} from 'react-redux'
import store from './redux/store'

let routes = <Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRedirect to="home"/>
			<Route path="home" component={Home}/>
			<Route path="list/:path" component={List}/>
			<Route path="login" component={Login}/>
			<Route path="mine" component={Mine}/>
			<Route path="register" component={Register}/>
			<Redirect from="*" to="home"/>
		</Route>
	</Router>
</Provider>
ReactDOM.render(
	routes
, document.getElementById('root'));
registerServiceWorker();
