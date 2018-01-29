import React from 'react'  

class Recommend extends React.Component{
        constructor(props){
            super(props)
            this. state = {
               
            }
        }
       
        render(){
           
           
            let data = this.props.data
            return(
               
        <div className="details-recommend" > 
			<h2>商品推荐</h2>
			<ul className="recommend-list">
                {
                    data.map(item=>(
                     <li key={item.sort}>
                        <a href="" target="_blank"><img src={`http://static.21cake.com/${item.img_url}`} alt={item.name}/></a>
                    </li>
                    ))
                   
                }
			</ul>
		</div>
            )
        }
 }
    export default Recommend
 
 
 
 
                         