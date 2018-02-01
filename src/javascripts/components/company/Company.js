
import React from 'react'
import Footer from '../footer/Footer'
class Company extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
	}
	componentWillReceiveProps(nextProps){
		//当路由切换时
		if(this.props.location !== nextProps.location){
			window.scrollTo(0,0)
		}
	}
    render(){
        return(
        	<div>
            <div className="company">
                <div className="nav">
                	<ul>
                		<li><img src="/img/firm-nav1.png" /></li>
                		<li><img src="/img/firm-nav2.png" /></li>
                		<li><img src="/img/firm-nav3.png" /></li>
                		<li><img src="/img/firm-nav4.png" /></li>
                	</ul>
                </div>
                
                <div className="enterprise-box company-box">
				    <h2 className="title" id="company">
				        <img src="/img/top1.png" alt="企业礼品卡兑换文字"/>
				    </h2>
				    <div className="logos">
				        <a href="">
				            <span className="company-logo-outer">
				                <img className="company-logo" src="/img/school.jpg" alt="浙江大学"/>
				            </span>
				            <span>浙江大学</span>
				        </a>
				        <a href="">
				            <span><i></i><i></i><i></i></span>
				            <span>其他机构</span>
				        </a>
				    </div>
				</div>
				
				<div className="enterprise-box tips-box">
				    <h2 className="title" id="normal">
				        <img src="/img/top2.png" alt="普通礼品卡兑换文字"/>
				    </h2>
				    <div className="faq-box">
				        <span>查看用户常见FAQ &gt;&gt;</span>
				    </div>
				    <div className="cards">
				        <a className="card-type">
				            <img src="/img/enjoy.png" alt="代金卡图"/>
				            <img src="/img/small.png" alt="代金卡文字"/>
				        </a>
				    </div>
				    <div className="cards">
				        <a className="card-type type-vip" >
				            <img src="/img/gift-card.png" alt="尊享卡图"/>
				            <img src="/img/small.png" alt="尊享卡文字"/>
				        </a>
				        <a className="card-type type-recharge">
				            <img src="/img/stored-value.png" alt="储值卡图"/>
				            <img src="/img/small.png" alt="尊享卡文字"/>
				        </a>
				    </div>
				</div>
				
				<div className="enterprise-box diy-box">
				    <h2 className="title" id="diy">
				        <img src="/img/top3.png" alt="企业定制文字"/>
				    </h2>
				    <div className="diy-subtitle">
				        <a href="">去定制&gt;&gt;</a>
				    </div>
				    <div className="diy-image">
				        <a href="" >
				            <img src="/img/top3-banner.jpg" alt="企业定制广告图"/>
				        </a>
				    </div>
				</div>
				
				<div className="enterprise-box city-box">
				    <h2 className="title" id="contact">
				        <img src="/img/top4.png" alt="联系我们文字"/>
				    </h2>
				    <div className="contact">
				        <div className="city">北京</div>
				        <div className="select-list anim-upbit" >
				            <ul>
				                <li>上海</li>
				                <li>北京</li>
				                <li>天津</li>
				                <li>杭州</li>
				                <li>无锡</li>
				                <li>苏州</li>
				                <li>广州</li>
				                <li>深圳</li>
				            </ul>
				        </div>
				        <p>联系电话：<span className="contact-phone">010-65503218</span></p>
				        <p>联系邮箱：qiye@21cake.com</p>
				    </div>
				</div>
				
				<div className="enterprise-box">
				    <hr/>
				</div>
				
				<div className="enterprise-box contact-box">
				    <h2 className="title" id="message">
				        <img src="/img/top5.png" alt="留言文字"/>
				    </h2>
				    <div className="message-board">
				        <ul>
				            <li><input type="text" name="companyName" placeholder="公司名称(必填)"/></li>
				            <li><input type="text" name="contacts" placeholder="联系人(必填)"/></li>
				            <li><input type="text" name="mobile" placeholder="手机号(必填)"/></li>
				            <li><input type="text" name="eml" placeholder="邮箱"/></li>
				            <li><textarea type="text" name="leavMessage" placeholder="留言(必填)"></textarea></li>
				            <li className="error"></li>
				        </ul>
				        <div className="submit">
				            <button type="submit" id="submit">提 交</button>
				        </div>
				    </div>
				</div>
            </div>
            <Footer/>
            </div>
        )
    }
}
export default Company