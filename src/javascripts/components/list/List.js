
import React from 'react'

// import axios from 'axios'
import $ from 'jquery';
import Cake from './cake'

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:{
                cat:{
                   content:[],
                   name:''
                },
                goodsArr:{1:{goods:[]},2:{goods:[]},3:{goods:[]},4:{goods:[]},5:{goods:[]},6:{goods:[]},},
                tags:{
                    fa22bf77a31700498f707fc3b9d86dff:{
                        content:[],
                        name:''
                    }
                }
            },
        }
    }
  
    componentWillMount(){
        var that = this;
        var form2 = {};
            form2.cityId = 2;
            form2.catId = this.props.location.pathname.charAt(this.props.location.pathname.length-1);
            form2.channel = 'pc';  
		$.ajax({
            type: 'GET',
            url: "http://api.21cake.com/?method=Gallery.goodsList&v=1.0",
            data: form2,
            async: true,
            dataType: 'jsonp',
            success: function(data) {
                that.setState({data:data.data}) 
            }
        });
    }
    
    render(){
        let path = this.props.location.pathname
        path = path.charAt(path.length-1)
        let {data} = this.state
        return(
            <div className="section-box">
                
                <Cake data={data} path={path}/>
            </div>
        )
    }
}
export default List