
import React from 'react'
import MineInfo from './Mine_info'
class  Mine extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
                <div id="info_swiper">
                    <div className ="info_box">
                      <MineInfo></MineInfo>
                    </div>
                </div>
        )
    }
}
export default Mine

