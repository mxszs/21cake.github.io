
import React from 'react'
import Banner from './Banner'
import Content from './Content'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
			
        }
    }
    
    componentWillReceiveProps(nextProps){

        //当路由切换时
        if(this.props.location !== nextProps.location){
            window.scrollTo(0,0)
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