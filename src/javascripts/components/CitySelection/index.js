import React, { Component } from 'react';

import NewGuest from './newGuest'


class CitySelection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mark:false
        }
        this.changeMark = this.changeMark.bind(this)
    }
    chaneIndex(type,event) {
        this.props.changeCity(type)     
        this.refs._city.style.display="none"
        this.refs._mark.style.background="rgba(0,0,0,0.5)"
        this.refs._mark.style.zIndex=20000000;
        this.setState({mark:true})
        event.stopPropagation()
    }
    changeMark(){
        if(!this.state.mark){
            return false
        }
        this.refs._mark.style.display = "none"
        localStorage.NewGuest = '123456'
    }

    componentWillMount(){
        if(localStorage.city){
            return false
        }
        setTimeout(() => {
            let H = document.getElementById("root").clientHeight
            this.refs._mark.style.height = H + "px"
        
        }, 500);
    }
    render() {
        let showCity = this.props.showCity
        return (
            <div onClick={this.changeMark} ref="_mark" className= "city_mark">
            {
                localStorage.city ? localStorage.NewGuest ? '' : <NewGuest ref="newGuest"/>  :
                <div ref="_city" className="city_selection">
                    <h4>欢迎来到21cake官网商城</h4>
                    <dl>
                        <dt><img src="/images/city/logo-di.png" alt="" /></dt>
                        <dd>
                            <p>请选择您的配送城市：<span>{showCity.name}市</span></p>
                            <ul className="clear">
                                {
                                    this.props.city.map((item, i) => (
                                        <li key={item.id}>
                                            <a onClick={this.chaneIndex.bind(this,{id:item.id,name:item.name})} className={showCity.id === item.id ? "active" : ''}>{item.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </dd>
                    </dl>
                </div>
            }
            </div>
            
        );
    }
}

export default CitySelection;
