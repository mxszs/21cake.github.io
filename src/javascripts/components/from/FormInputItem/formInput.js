


import React from 'react'



class FormInputItem extends React.Component {
	
	
	
	
	render(){
		let {type,placeholder,id,headler,Maths,name} = this.props
		return (
			
			<div className="form-input-item clear">
			
				<input name={name} onKeyPress={this.headler}  id={id||''} placeholder={placeholder} type={type||"text"} />
				{
					id==='regiImgText'?<div className="image-m"><span className='ImgItem'>{Maths}</span><i onClick={headler}></i></div>:''
				}
				{
					id==='authCode'?<div className="yzm"><a className='yz-box'>获取验证码</a></div>:''
				}
			</div>
			
		)
	}
	
}

export default FormInputItem
