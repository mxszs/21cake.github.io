
import React from 'react'

class ContentActive extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            
            <div className='content-active'>
            	<h4>活动门<span>/是被吸引力吧</span></h4>
            	<div className='content-active-img'>
            		<img src={require('../../../assets/img/active1.jpg')} alt="" />
        			<img src={require('../../../assets/img/active2.jpg')} alt="" />
        
            	</div>
            	
            </div>

        )
    }
}
export default ContentActive