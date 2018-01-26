
import React from 'react'

import Banner from './Banner'
import Content from './Content'
import Footer from '../footer/Footer'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
			
        }
    }
    
    
    render(){
    	
        return(
            <div className="main-box">
                <header></header>
                
                <Banner/>
                
                <Content/>
                
                <Footer/>
            </div>
        )
    }
}
export default Home