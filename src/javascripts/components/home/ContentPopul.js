
import React from 'react'

class ContentPopul extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
   render(){
    
    let {data} = this.props
        return(
            <div className='content-new'>
                
            	<h4>{data?data.title:''}<span>/{data?data.subTitle:''}</span></h4>
            	<div className='content-new-img'>
            		<a href=''>
            		<img src={data?'http://www.21cake.com'+data.banner:''} alt="" />
        			</a>
            	</div>
            	<div className='content-new-list'>
            		<ul>
            			{
            				data?data.contents.map((item,i)=>(
            					<li key={item.id}>
		            				<img src={'http://www.21cake.com'+item.imageUrl} alt="" />
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