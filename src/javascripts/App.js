import React, { Component } from 'react';


import Header from './components/header'
import Footer from './components/footer/Footer' 
class App extends Component {
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

export default App;
