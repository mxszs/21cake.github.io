import React, { Component } from 'react';
import Footer from './components/footer/Footer'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CartActions from '../redux/ActionCreators/CartActions'
import Header from './components/header'
class App extends Component {
   componentWillMount(){
		//初始化购物车数据
                this.props.CartActions.initCars()
                console.log(this.props)
                
     }
  render(){
    return (
      <div> 
        <Header/>
        {this.props.children}

        <div className="body_mast"></div>
        <Footer/>
      </div>
    );
  }
}

export default connect(state=>state,(dispatch)=>{
  return {
    CartActions:bindActionCreators(CartActions,dispatch)
  }
})(App);
