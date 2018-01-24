
import React from 'react'
import Formmimix from '../from/formmimix'
import FormInputItem from '../from/FormInputItem/formInput'
import PickerSizesDemo from '../from/FormInputItem/antd-set'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                isShow:true,
                code:''
        } 
            this.createCode = this.createCode.bind(this)
            this.loginHandler = this.loginHandler.bind(this)
    }
        
            createCode(){
            //let checkCode = document.getElementsByClassName("ImgItem")[0];  
            let str = ''
            let random = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
            'S','T','U','V','W','X','Y','Z'];//随机数  
            for(var i = 0; i < 4; i++) {//循环操作  
                var index = Math.floor(Math.random()*52);//取得随机数的索引（0~52)
                str += random[index];//根据索引取得随机数加到code上  
                
            }  
                this.setState({code:str})
        
            } 
          componentWillMount(){ 
           this.createCode()
        }  
          loginHandler(data){	
             
                    //this.props.UserActions.loginHandler(data)	
                 console.log(data,11111111111111)	
	        }
            
    render(){
        let {isShow,code} = this.state
       
        return(
            <div>
                <div className='register-bg'>
                    <div className="form-box">
                         <Formmimix headler={this.loginHandler} isShow={isShow}>
                             <h2 className='regi-user'>用户注册</h2>
                           <FormInputItem name={'phone'} placeholder={'输入手机号码'}/>
                           <FormInputItem  name={'password'} type={"password"}placeholder={"密码:请输入8～20字符，需同时包含英文和数字"}/>
                           <FormInputItem  type={"password"} placeholder={'确认密码'}/>
                           <FormInputItem  headler={this.createCode} Maths={code} id={'regiImgText'} placeholder={'请输入图片字符'}/>
                           <FormInputItem  id={'authCode'} placeholder={'短信验证码'}/>
                           <PickerSizesDemo  />
                          
                    </Formmimix>
                    </div>
                   
                </div>
            </div>
        )
    }
}
export default Register