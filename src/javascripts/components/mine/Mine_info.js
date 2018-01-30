import React from 'react'

import {connect} from 'react-redux'
class   MineInfo extends React.Component{
        constructor(props){
            super(props)
            this.state = {

            }
        }
        render(){
            return(
                <div className ="account-area">
                      <div className="edit_info">
                            <div className="edit_iofo_left">
                                <span className='change_head'> <span className='change_head_mask'></span></span>
                               
                            </div>
                            <div className="edit_info_right">
                                <h2 className='phone-info'>{this.props.User.userLoginInfo.phone}</h2>
                                <p>{this.props.User.userLoginInfo.phone} &nbsp;&nbsp;<span>修改密码</span></p>
                                <ul>
                                    <li className='clear'>
                                         <i className='edit_ico person'></i>  <span>编辑个人资料</span>
                                     
                                    </li>
                                    <li className='clear'>
                                        <i className='edit_ico address'></i>   <span>地址管理</span>
                                      
                                    </li>
                                    <li className='clear'>
                                         <i className='edit_ico buy'></i> <span>订单管理</span>
                                       
                                    </li>
                                </ul>
                            </div>
                      </div>
                      <div className="cash_coupou">

                      </div>
                </div>
            )
        }

}
export default connect(state=>state)(MineInfo)