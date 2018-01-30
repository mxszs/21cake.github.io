
import React from 'react'

class ContentActive extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
    	let {data} = this.props
    	
        return(
            
            <div className='content-active'>
            	<h4>活动门<span>/是被吸引力吧</span></h4>
            	<div className='content-active-img'>
            		{
        				data?data.data.map((item,i)=>(
        					
        					<a key={i} href="http://www.21cake.com/magazine/detail/175.html"><img src={'http://www.21cake.com'+item.img_url} alt="" /></a>
        			
        				)):''
            		}
            	</div>
            </div>
        )
    }
}
export default ContentActive