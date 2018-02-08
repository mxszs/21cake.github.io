
import React from 'react'
import MineInfo from './Mine_info'
import Member from './member'
class Mine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div id="info_swiper" className='clear'>
                <div className="info_box">
                    <MineInfo></MineInfo>
                    <Member></Member>
                </div>
            </div>
        )
    }
    componentWillReceiveProps(nextProps){

        //当路由切换时
        if(this.props.location !== nextProps.location){
            window.scrollTo(0,0)
        }
    }
}
export default Mine

