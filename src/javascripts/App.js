import React, { Component } from 'react';
import Footer from './components/footer/Footer'

import Header from './components/header'

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
