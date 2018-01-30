
import React from 'react'
import Header from '../header'
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
			<div>
                    <Header/>
                <div className="main-box">

                    
                    <Banner/>
                    
                    <Content/>
                    
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Home