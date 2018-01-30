


import React from 'react'
import { Modal, Button } from 'antd'
import {Link} from 'react-router'

class Form extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			isDisabled:false
		}
		this.handler = this.handler.bind(this)
		this.success = this.success.bind(this)
		
	}
	
	handler(e){
		console.log(this.props)
		e.preventDefault()
			
		let NoEmpty = this.elements.every(inp=>{
				return Boolean(inp.value)
		})		
		this.setState({isDisabled:!NoEmpty})
		let data = {}
		this.elements.forEach(item=>{
			data[item.name] = item.value
		})
		if(data.phone!==""&&data.password!==""){
			this.props.headler(data)
		}
		
			
		console.log(this.props.isRegis)
		//注册
		if(NoEmpty&&this.props.isRegis){

				this.success()
				NoEmpty = false
		}
		//登录
		if(NoEmpty&&this.props.isLogin){//判断登录
				this.success()
		}
		
		
	}
	success() {
			const modal = Modal.success({
				title: this.props.text+"成功"
				//content: 'This modal will be destroyed after 1 second',
			});
			//setTimeout(() => modal.destroy(), 10000);
			}
	
	render(){
		let {isShow,str,cname,isShow2,isphone} = this.props
		let {isDisabled,success} = this.state
		return (
			
			<form ref={(el)=>{this.el=el}} onSubmit={this.handler} className="form">
				 {isShow?<h2 className='regi-user'>{this.props.text}</h2>:''}
				 {isShow2?<h2 className='regi-user'><span onClick={this.props.person} className={isphone?'':'action'}>用户{this.props.text}</span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<span className={isphone?'action':''}  onClick={this.props.phone}>手机验证码登录</span></h2>:''}
				{this.props.children}
				{/*验证信息*/}
				{isDisabled?<p  style={{display:cname?'none':'block'}}  className={'point'}>{str||'请将表单正确的填写完整'}</p>:''}
				
				{/*按钮*/}
				{isDisabled?<p  style={{display:cname?'block':'none'}} className={'point_name'}>{str||'请将登录信息填写完整'}</p>:''}
				<button  className='regi-button'>{this.props.text}</button>{/*登录注册按钮*/}
				{/**/}
					
				{ isShow?<div className='reading-protocol'>
			
				<label><input type="checkbox"/>&nbsp;已阅读并同意</label>
				<a href="###">21客会员协议</a>和<a href="###">隐私保护政策</a>
				</div>:''}
				{ isShow2?<div className='reading-protocolbox'>
			
				<label><input type="checkbox"/>&nbsp;记住账号</label>
				<div className='reading-right'>
					<span>忘记密码</span>&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/register">去注册</Link>
				</div>
				</div>:''}
			</form>
			
		)
	}
	componentDidMount(){
		//遍历所有input元素
		this.elements = Array.prototype.slice.call(this.el.getElementsByTagName("input"))
		let that = this
		let NoEmpty = that.elements.every(inp=>{
				return Boolean(inp.value)
		})		
		that.setState({isDisabled:!NoEmpty})
		this.elements.forEach((item,i)=>{			
			item.oninput = function(e){
				let NoEmpty = that.elements.every(inp=>{
					return Boolean(inp.value)
				})
				
				that.setState({isDisabled:!NoEmpty})//改变isDisabled的状态
				
			}		
		})
		
	
	}


			

	
}

export default Form
