import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Avatar from './Merber/antd-update'
class   MineInfo extends React.Component{
        constructor(props){
            super(props)
            this.state = {

            }
        }
        render(){
            return(
                <div className ="account-area clear">
                      <div className="edit_info">
                            <div className="edit_iofo_left">
                                <span className='change_head'><span className='change_head_mask'></span><span className='change_head_sk' ><Avatar></Avatar></span></span>
                               
                            </div>
                            <div className="edit_info_right">
                                <h2 className='phone-info'>{this.props.User.userLoginInfo.phone}</h2>
                                <p>{this.props.User.userLoginInfo.phone} &nbsp;&nbsp;<span >修改密码</span></p>
                                <ul>
                                    <li className='clear'>
                                         <i className='edit_ico person'></i>  <Link to='/mine/info'>编辑个人资料</Link>
                                     
                                    </li>
                                    <li className='clear'>
                                        <i className='edit_ico address'></i>   <Link  to='/mine/address'>地址管理</Link>
                                      
                                    </li>
                                    <li className='clear'>
                                         <i className='edit_ico buy'></i> <Link  to='/mine/order'>订单管理</Link>
                                       
                                    </li>
                                </ul>
                            </div>
                      </div>
                      <div className="cash_coupou">
                           <ul>
                               <li><i className='bg  one'></i><div  className='active_box'><p>果实币余额: ¥0 </p><a>卡券充值</a><a>在线购买果实币</a></div></li>
                                 <li><i className='bg two'></i><div className='active_box'><p>果实币余额: ¥0 </p></div></li>
                               <li><i className='bg  three'></i><div className='active_box'><p>果实币余额: ¥0 </p></div></li>
                           </ul>
                      </div>
                   
                </div>
            )
        }

}
export default connect(state=>state)(MineInfo)
