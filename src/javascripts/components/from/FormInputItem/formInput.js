


import React from 'react'



class FormInputItem extends React.Component {
	
	
	
	
	render(){
		let {type,placeholder,id,headler,Maths,name,head,isShow,isShow2} = this.props
		return (
			
			<div className="form-input-item clear">
			
				
				<input name={name} onBlur={headler}  id={id} placeholder={placeholder} type={type||"text"} />{isShow?<span className={`pront-bg${name}`}></span>:''}
				{isShow2?<span className={`pront-bg${name}`}></span>:''}
				{
					id==='regiImgText'?<div className="image-m"><span className='ImgItem'>{Maths}</span><i onClick={head}></i></div>:''
				}
				{
					id==='authCode'?<div className="yzm"><a onClick={head} className='yz-box'>获取验证码</a></div>:''
				}
			</div>
			
		)
	}
	
}

export default FormInputItem
