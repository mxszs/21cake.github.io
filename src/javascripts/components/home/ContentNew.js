
import React from 'react'

import ContentItem from './ContentItem'
class ContentNew extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    render(){
      			
    let {data} = this.props
    
        return(
            <div className='content-new'>
            	<h4>{data?data.data[0].title:''}<span>/{data?data.data[0].subTitle:''}</span></h4>
            	<div className='content-new-img'>
            		<a href={data?"http://www.21cake.com"+data.data[0].href:''}>
            			<img src={data?"http://www.21cake.com"+data.data[0].banner:''} alt="" />
        
        			</a>
            	</div>
            	<div className='content-new-list'>
            		<ul>
            			{
            				data?data.contents.map((item,i)=>(
            					<ContentItem key={item.id} item={item}/>
            				)):''
	            			
	            		}

            		</ul>
            	</div>


            </div>

        )
    }
}
export default ContentNew