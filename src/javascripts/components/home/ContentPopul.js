
import React from 'react'

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
            				data?data.data[1].contents.map((item,i)=>(
            					<li key={item.id}>
		            				<a href={item.href}><img src={'http://www.21cake.com'+item.imageUrl} alt="" /></a>
		        					<div>
		        						<h5>{item.name}</h5>
		        						<h6>{item.description}</h6>
		        						<p>
			        						{
			        							item.tags.map((item,i)=>(
			        								<span key={item.id}>{item.content}</span>
			        							))
			        						}
		        						</p>
		        						<div className='cart-info'>
		        							<span>¥{item.default.price}/{item.default.spec}</span>
		        							<a>加入购物车</a>
		        						</div>
		        					</div>
		            			</li>
            				)):''
	            			
	            		}

            		</ul>
            	</div>


            </div>
        )
    }
}
export default ContentPopul