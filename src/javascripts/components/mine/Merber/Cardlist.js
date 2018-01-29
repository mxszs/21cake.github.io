
import React from 'react'

class  Cardlist extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
       
    }
    render(){
        return(
                
                    <div className ="member_Info">
                                <div id="member_coupon" className="member-coupon">
                                        <div className="member-title">
                                            <h2 style={{float: 'none'}}>我的代金卡
                                                <span>代金卡列表</span>
                                        </h2>
                                        </div>
                                        <div className="member-mod">
                                            <table className="member-grid">
                                                <thead>
                                                    <tr>
                                                        <th>卡编号</th>
                                                        <th>卡使用状态</th>
                                                        <th>卡使用时间</th>
                                                        <th>卡金额</th>
                                                        <th>对应订单</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="first">
                                                    <tr className="first">
                                                        <td colSpan="4" className="no-information">暂无代金卡记录</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                 </div>

                    </div>
              
        )
    }
}
export default Cardlist

