
import React from 'react'
import Header from '../header'
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
                    <header></header>
                    
                    <Banner/>
                    
                    <Content/>
                    
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Home