
import React from 'react'
import ContentNew from './ContentNew'
import ContentPopul from './ContentPopul'
import ContentActive from './ContentActive'
import ContentText from './ContentText'

import $ from 'jquery';

class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
			data:{
				bannerList:[],
				
			}
        }
    }
    componentWillMount(){
    	//http://api.21cake.com/?method=Advertisement.showV2&v=1.0&callback=jQuery11110050598363610697694_1516798992577&cityId=2&position=home_floor%2Cactivity%2Cmagazine&channel=pc&_=1516798992578
	  
        var that = this;
        var form2 = {};
            form2.cityId = 2;
            form2.position = 'home_floor,activity,magazine';
            form2.channel = 'pc'; 
		$.ajax({
            type: 'GET',
            url: "http://api.21cake.com/?method=Advertisement.showV2&v=1.0",
            data: form2,
            async: true,
            dataType: 'jsonp',
            success: function(data) {
            	
                that.setState({data:data.data[0].data}) 
     
//              console.log(data.data[0])
//              console.log(data.data[0].title)
//              console.log(data.data[0].data)
//              console.log(data.data[0].data[0])
//              console.log(data.data[0].data[1])
                
            }
            
        });
    }
    render(){
    	let {data} = this.state
        return(
            <div className="content">
            	<div className='content-nav'>
            		<a href=''><img src={require('../../../assets/img/nav1.jpg')} alt="" /></a>
            		<a href=''><img src={require('../../../assets/img/nav2.jpg')} alt="" /></a>
		            <a href=''><img src={require('../../../assets/img/nav3.jpg')} alt="" /></a>
		            <a href=''><img src={require('../../../assets/img/nav4.jpg')} alt="" /></a>
            
            	</div>
                
                <ContentNew data={data[0]}/>
                
                <ContentPopul data={data[1]}/>
                
                <ContentActive/>
                
                <ContentText/>
            </div>
        )
    }
}
export default Content