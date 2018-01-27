
import React from 'react'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
import $ from 'jquery';
import axios from 'axios'

class Banner extends React.Component{
    constructor(props){
        super(props)
        this.state = {
			bannerImg:[]
					
		}
    }
   componentWillMount(){
    	
		axios.get("/banner.json").then((res)=>{
			
			this.setState({bannerImg:res.data}) 

		})
            
            
    }
   componentDidUpdate(){
        new Swiper('.banner',{
            pagination: {
                el: '.banner-pagination',
            },
            loop:true,
            autoplay:true
            
        })
    }
    render(){
        let {bannerImg}=this.state
        return (
        	<div className="swiper-container banner">
        		<div className="swiper-wrapper">
		            {
		            	bannerImg.map(item=>(         
		                    <div className="swiper-slide" key={item.id}>
		                        <img alt="" src={item.url}/>
		                    </div>
		            	))
	            	}
	            </div>
	            <div className="swiper-pagination banner-pagination"></div>
	        </div>
            


        )
    }
}
export default Banner