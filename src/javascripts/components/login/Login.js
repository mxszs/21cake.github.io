
import {hashHistory} from 'react-router'

import React from 'react'
import Formmimix from '../from/formmimix'
import FormInputItem from '../from/FormInputItem/formInput'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Modal, Button } from 'antd'
import UserActions from '../../../redux/ActionCreators/UserActions'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
              
               isShow:true,//组件的显隐关系
               Regi:'',//正则提示信息
               isLogin:false,//判断登录
               isphone:false//列表切换
        } 
           this.loginHandler = this.loginHandler.bind(this)
           this.reget = this.reget.bind(this)
           this.regetone = this.regetone.bind(this)
           this.loginPhone = this.loginPhone.bind(this)
           this.loginPerson = this.loginPerson.bind(this)
            
    }
        success() {//tanch
			const modal = Modal.success({//弹出框
				title: '请正确填写登录信息'
				//content: 'This modal will be destroyed after 1 second',
			});
			//setTimeout(() => modal.destroy(), 10000);
            }
        
        loginHandler(data){	//登录
           // console.log(this.props)
            this.elementsone = document.getElementsByTagName("input")[0]
            this.elementstwo = document.getElementsByTagName("input")[1]
           
                if(this.elementsone.value&&this.elementstwo){
                     if(this.elementsone.value===this.props.User.userInfo.phone&&this.elementstwo.value===this.props.User.userInfo.password){
                        this.setState({isLogin:true})//改变状态
                         this.props.UserActions.mineHandler()//调用actions的方法
                        hashHistory.push('/home')//成功后跳转home
                     }else{
                           this.success()
                        this.setState({isLogin:false})
                      
                      
                     }
                }   
        }
        //判断是手机登陆还是密码登录
        loginPhone(){
            this.setState({isphone:true})
        }   
        loginPerson(){
             this.setState({isphone:false})
        }
    render(){
        let {isShow,code,Regi,isLogin,isphone} = this.state
       
        return(
            <div>
                <div className='register-bg'>
                    <div className="form-box">
                         <Formmimix isphone={isphone}  phone={this.loginPhone} person={this.loginPerson} isLogin={isLogin}  cname={true} text={'登录'} str={Regi} headler={this.loginHandler} isShow2={isShow}>
                           <FormInputItem  name={'phone'} headler={this.reget} isShow2={isShow} placeholder={'请输入您的账号'}/>
                           {!isphone?<FormInputItem type={'password'}  name={'password'} isShow2={isShow} headler={this.regetone} placeholder={'输入密码'}/>:''}    
                            {isphone?<FormInputItem  isShow={isShow} headler={this.regethree} head={this.createCode} Maths={code} id={'regiImgText'} name={'Img'} placeholder={'请输入图片字符'}/>:''}
                            {isphone?<FormInputItem   headler={this.regetfour} head={this.createCode} id={'authCode'} placeholder={'短信验证码'}/>:''}
                        </Formmimix>
                    </div>
                   
                </div>
            </div>
        )
    }
      reget(){
        this.elespan = document.getElementsByClassName("pront-bgphone")[0]
        this.elementszeio = document.getElementsByTagName("input")[0]
        var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
        var phoneNum =this.elementszeio.value;//手机号码
            if(reg.test(phoneNum)){
                this.setState({Regi:''})
                 this.elespan.style.display = 'block'
            }else{
                this.setState({Regi:'请填写正确的手机号'})
                  this.elespan.style.display = 'none'
            }
		
    }
        regetone(){
        this.elespant = document.getElementsByClassName("pront-bgpassword")[0]
        this.elemen= document.getElementsByTagName("input")[1]
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/; //验证规则
        var phoneNum =this.elemen.value;//密码
            if(reg.test(phoneNum)){
                 this.setState({Regi:''})
                   this.elespant.style.display = 'block'
            }else{
                this.setState({Regi:'密码:请输入8～20字符，需同时包含英文和数字'})
                 this.elespant.style.display = 'none'
            }
		
    }
 
}
export default connect(state=>state,(dispatch)=>{
	return {
		UserActions:bindActionCreators(UserActions,dispatch)
	}
})(Login)