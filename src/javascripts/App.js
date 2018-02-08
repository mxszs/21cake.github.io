import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CartActions from '../redux/ActionCreators/CartActions'


import Header from './components/header'
import Footer from './components/footer/Footer'

import CitySelection from './components/CitySelection'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: [
                { id: 1, name: "上海" },
                { id: 2, name: "北京" },
                { id: 3, name: "天津" },
                { id: 4, name: "杭州" },
                { id: 5, name: "无锡" },
                { id: 6, name: "苏州" },
                { id: 7, name: "广州" },
                { id: 8, name: "深圳" }
            ],
            showCity: { id: 1, name: '上海' },
        }
        this.changeCity = this.changeCity.bind(this)
    }
    changeCity(type) {
        this.setState({showCity:type})
        localStorage.city =  JSON.stringify(type)
    }
    componentWillMount() {
        //初始化购物车数据
        this.props.CartActions.initCars()
    }
    render() {

        return (
            <div>
                <CitySelection city={this.state.city} showCity={this.state.showCity} changeCity={this.changeCity}/>

                <Header city={this.state.city} showCity={this.state.showCity} changeCity={this.changeCity}/>
                {this.props.children}
                <div className="body_mast"></div>
                <Footer />
            </div>
        );
    }
}

export default connect(state => state, (dispatch) => {
    return {
        CartActions: bindActionCreators(CartActions, dispatch)
    }
})(App);
