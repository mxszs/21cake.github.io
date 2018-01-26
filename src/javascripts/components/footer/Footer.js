
import React from 'react'

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className='footer'>
                <img className='img' src={require('../../../assets/img/footer-logo.png')} alt="" />
            	<div className="footer-nav">
			        <a href="">联系我们</a>
			        <span>|</span>
			        <a href="">订购帮助</a>
			        <span>|</span>
			        <a href="">企业合作</a>
			        <span>|</span>
			        <a href="">生产经营资质</a>
			        <span>|</span>
			        <a href="">公告专区</a>
			    </div>
			    <div className="footer-icon">
			        <a href="">
			            <img className='img1' src={require('../../../assets/img/footericon-01.png')} alt="" />
			        </a>
			        <a className="footer-weixin">
				        
			            <img className='img1' src={require('../../../assets/img/footericon-02.png')} alt="" />
			        </a>
			        <a className="footer-app">
			            APP
			        </a>
			    </div>
			    <div className="footer-text">
			        <span>订购专线：400 650 2121（服务时间 08:00–22:00）</span>
			        <span>客服电话：021-23099721（全国） | kefu@21cake.com（邮箱）</span>
			        <span>杭州/广州：提前5小时预订；北京：提前6小时预订；上海：提前6-8小时预订；天津/苏州/无锡/深圳：提前8小时预订（当日22点以后订单，于次日8点开始审核） </span>
			        <span>当日蛋糕配送截止下单时间：北京：16:50；上海：16:30；杭州/广州：13:50；天津：10:30；苏州/无锡/深圳：11:00</span>
			        <span>网站注册公司名称: 北京廿一客食品有限公司 地址: 北京市北京经济技术开发区兴海二街5号院3号楼 </span>
			    </div>
			    <div className="footer-copyright">
			        <span>Copyright© 21Cake蛋糕官网商城 2007-2018, 版权所有 京ICP备14006254号-1</span>
			    </div>
            </div>
        )
    }
}
export default Footer