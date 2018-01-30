
import React from 'react'
import ContentItem from './ContentItem'

class ContentPopul extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
   render(){
    
    let {data} = this.props
	console.log(data?data.data[1]:'')
        return(
            <div className='content-new'>
            	<h4>{data?data.data[1].title:''}<span>/{data?data.data[1].subTitle:''}</span></h4>
            	<div className='content-new-img'>
            		<a href={data?"http://www.21cake.com"+data.data[1].href:''}>
            			<img src={data?"http://www.21cake.com"+data.data[1].banner:''} alt="" />
        
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
export default ContentPopul