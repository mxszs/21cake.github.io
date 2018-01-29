
import React from 'react'
import { Modal} from 'antd'
class  Compun extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.success = this.success.bind(this)
    }
    success() {//tanch
			const modal = Modal.success({//弹出框
                title: '优惠券号码'
                
                
			});
			    setTimeout(() => modal.destroy(), 10000);
    }
    render(){
        return(
                
                    <div className ="member_Info">
                                <div id="member_coupon" className="member-coupon">
                                        <div className="member-title">
                                            <h2 style={{float: 'none'}}>我的优惠券                <a onClick={this.success} ><span>绑定优惠券</span></a>
                                        </h2>
                                        </div>
                                        <div className="member-mod">
                                            <table className="member-grid">
                                                <thead>
                                                    <tr>
                                                        <th>优惠券号码</th>
                                                        <th>名称</th>
                                                        <th>有效期至</th>
                                                        <th>状态</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="first">
                                                    <tr className="first">
                                                        <td colSpan="4" className="no-information">暂无优惠劵</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                 </div>

                    </div>
              
        )
    }
}
export default Compun

