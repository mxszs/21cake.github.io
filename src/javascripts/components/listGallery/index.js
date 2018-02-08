
import React from 'react'
import $ from 'jquery'


import Item from '../list/item'
class Gallery extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[],
            topData:[
                {id:"1",name:"乳脂奶油",imageUrl:''},
                {id:"2",name:"慕斯",imageUrl:''},
                {id:"3",name:"乳酪",imageUrl:''},
                {id:"4",name:"冰淇淋",imageUrl:''},
                {id:"5",name:"巧克力",imageUrl:''},
                {id:"6",name:"坚果",imageUrl:''},
                {id:"7",name:"水果",imageUrl:''},
                {id:"8",name:"含酒",imageUrl:''},
                {id:"9",name:"咖啡",imageUrl:''},
                {id:"17",name:"情侣",imageUrl:'/images/gallerylist/ql17.jpg'},
                {id:"19",name:"童趣",imageUrl:'/images/gallerylist/tq19.jpg'},
                {id:"20",name:"设计师款",imageUrl:'/images/gallerylist/sjks20.jpg'},
                {id:"22",name:"聚会",imageUrl:'/images/gallerylist/jh22.jpg'},
                {id:"29",name:"低温",imageUrl:'/images/gallerylist/dw29.jpg'},
                {id:"30",name:"新品",imageUrl:'/images/gallerylist/xp30.jpg'},
                {id:"31",name:"人气",imageUrl:'/images/gallerylist/rq31.jpg'},
                {id:"32",name:"长辈",imageUrl:'/images/gallerylist/cb32.jpg'},
            ],
            showDate:{}
        }
    }
    componentWillReceiveProps(nextProps){

        //当路由切换时
        if(this.props.location !== nextProps.location){
            window.scrollTo(0,0)
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.params.id != this.props.params.id) {
            this.ajaxData(nextProps.params.id);
        } 
     }

    componentWillMount(){
        this.ajaxData(this.props.params.id)
    }
    ajaxData(id){
        var that = this;
        var id = id
        var data = {
            tagId : id,
            cityId : 2,
            channel : 'pc',
        }  
		$.ajax({
            type: 'GET',
            url: "http://api.21cake.com/?method=Tag.goodsList&v=1.0",
            data: data,
            async: true,
            dataType: 'jsonp',
            success: function(data) {
                if(data.status==="ok"){
                    that.setState({data:data.data})
                }
            }
        });
        
        this.state.topData.forEach((item)=>{
            if(item.id == id){
                that.setState({showDate:item})
            }
        })
    }
    
    render(){
        let showDate = this.state.showDate
        let data = this.state.data
        return(
            <div>
                <div className="list_gallery section-box">
                    <div className="top_img" style={{backgroundImage:`url(${showDate.imageUrl})`}}></div>
                    <h2>{showDate.name}<i></i></h2>
                <p></p>
                </div>
                <ul className="list_g_list clear">
                   {data ? <Item data={data}/> : ''}
                </ul>
            </div>
        )
    }
}
export default Gallery