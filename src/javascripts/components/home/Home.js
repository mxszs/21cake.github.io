
import React from 'react'

import Banner from './Banner'
import Content from './Content'



class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
			
        }
    }
    
    
    render(){
    	
        return(
            <div>
                <div className="main-box">
                    
                    <Banner/>
                    
                    <Content/>
                    
                </div>
            </div>
        )
    }
}
export default Home