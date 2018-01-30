
import React from 'react'

class ContentText extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
    	let {data} = this.props

        return(
            
            <div className='content-text'>
            	<h4>廿一客<span>/文章</span><a href="http://www.21cake.com/magazine.html">查看更多 ></a></h4>
            	<div className='content-text-info'>
            		{
        				data?data.data.map(item=>(
        					<a key={item.id} href={'http://www.21cake.com'+item.href}>
        						<img src={'http://www.21cake.com/'+item.banner} alt="" />
			         			<h4>{item.name}</h4>
			         			<p>阅读全文 >></p>
        					</a>
        			
        				)):''
            		}
            	</div>
            	
            </div>

        )
    }
}
export default ContentText