
import React from 'react'
class  MemberAddress extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
                <div className='member_Info'>
                   <div className="content-box">
                    <div className="address-title"><span>地址管理</span> 已保存0个收货地址（最多添加10条）</div>

                                <div className="address-empty-box">
                            <button className="add-address-button">＋添加新地址</button>
                        </div>

                     </div>
                </div>
        )
    }
}
export default MemberAddress

