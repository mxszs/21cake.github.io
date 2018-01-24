
import React from 'react'

import axios from 'axios'

import Cake from './cake'
class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    // componentWillMount(){
    //     axios.get("/21cake/",{
    //         params:{
    //             method:"Gallery.goodsList",
    //             v:1.0,
    //             callback:"jQuery111105987209916197769_"+new Date().getTime(),
    //             catId:1,
    //             cityId:2,
    //             channel:"pc",
    //             _:new Date().getTime()+1
    //         }
    //     }
    //    )
    //     .then((res)=>{
    //         console.log(res)
    //     })
    //     console.log(new Date().getTime())
    // }

    render(){
        return(
            <div className="section-box">
                <Cake />
            </div>
        )
    }
}
export default List