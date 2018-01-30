import React, { Component } from 'react';


import Header from './components/header'

class App extends Component {
  render(){
    return (
      <div> 
        <Header/>
        {this.props.children}

        <div className="body_mast"></div>
      </div>
    );
  }
}

export default App;
