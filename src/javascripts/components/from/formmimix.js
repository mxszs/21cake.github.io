


import React from 'react'



class Form extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			isDisabled:false
		}
		this.handler = this.handler.bind(this)
	}
	
	handler(e){
		e.preventDefault()	
		
		let data = {}
		this.elements.forEach(item=>{
			data[item.name] = item.value
		})
		
		this.props.headler(data)
	}
	
	
	render(){
		let {isShow} = this.props
		return (
			
			<form ref={(el)=>{this.el=el}} onSubmit={this.handler} className="form">
				
				{this.props.children}
				<button className='regi-button'>{this.props.text||'注册'}</button>
				{ isShow?<div className='reading-protocol'>
				<label><input type="checkbox" />&nbsp;已阅读并同意</label>
				<a href="###">21客会员协议</a>和<a href="###">隐私保护政策</a>
				</div>:''}
			</form>
			
		)
	}
	componentDidMount(){
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
				
				that.setState({isDisabled:!NoEmpty})
				
			}		
		})
		this.elements[0].onblur = function(e){
				var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
				var phoneNum = this.value;//手机号码
					if(reg.test(phoneNum)){
						console.log('对了')
					}else{
						console.log('不对')
					}
		}
	
	}
	
}

export default Form
