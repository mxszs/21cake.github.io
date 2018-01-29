
import React from 'react'
class  Member extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
                <div className='member_box'>
                    <div className="member clear" >
                        <p className="ca_title">会员中心</p>
                        <p className="current-identity">您当前的身份是：<span className="normal-user">注册会员</span></p>
                        <div className="img_box">
                            <img src='/register/new_membership.png' alt=''/>
                            <p className="fruit_rule_title">果实规则：</p>
                            <p className="fruit_rule">1、订单实际支付金额每满100元，则将自动获得1颗果实，以此类推。累积果实可升级，并享受各级会员权益。订单中使用优惠券、订单促销等优惠抵扣的金额不参与消费金额的累积。</p>
                            <p className="fruit_rule">2、每90天内未产生购买，果实减一颗，若果实减少为下一等级数量时，等级相应降低，上一级别的固定权益失效。</p>
                            <p className="fruit_rule">3、所获得的权益自获得日起，一年内有效。</p>
                            <p className="fruit_rule"><a href="###">了解更多&gt;&gt;</a></p>
                        </div>
                      
                    </div>
                </div>
        )
    }
}
export default Member

