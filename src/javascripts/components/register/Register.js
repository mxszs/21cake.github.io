


import React from 'react'
import Formmimix from '../from/formmimix'
import FormInputItem from '../from/FormInputItem/formInput'
import PickerSizesDemo from '../from/FormInputItem/antd-set'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserActions from '../../../redux/ActionCreators/UserActions'
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true,
            code: '',
            Regi: '',
            isRegis: false
        }
        this.createCode = this.createCode.bind(this)
        this.loginHandler = this.loginHandler.bind(this)
        this.reget = this.reget.bind(this)
        this.regetone = this.regetone.bind(this)
        this.regetwo = this.regetwo.bind(this)
        this.regethree = this.regethree.bind(this)
        this.regetfour = this.regetfour.bind(this)

    }
    loginHandler(data) {
        // console.log(this.props)

        this.props.UserActions.registerHandler(data)
        this.elements = Array.prototype.slice.call(document.getElementsByTagName("input"))
        this.elements.every(inp => {
            if (Boolean(inp.value)) {
                this.setState({ isRegis: true })
            } else {
                this.setState({ isRegis: false })
            }
        })
        // console.log(NoEmpty)




    }
    createCode() {
        //let checkCode = document.getElementsByClassName("ImgItem")[0];  
        let str = ''
        let random = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];//随机数  
        for (var i = 0; i < 4; i++) {//循环操作  
            var index = Math.floor(Math.random() * 52);//取得随机数的索引（0~52)
            str += random[index];//根据索引取得随机数加到code上  

        }
        this.setState({ code: str })

    }


    render() {
        let { isShow, code, Regi, isRegis } = this.state

        return (
            <div>
                <div className='register-bg'>
                    <div className="form-box">
                        <Formmimix isRegis={isRegis} text={'用户注册'} str={Regi} headler={this.loginHandler} isShow={isShow}>
                            <FormInputItem isShow={isShow} headler={this.reget} name={'phone'} placeholder={'输入手机号码'} />
                            <FormInputItem isShow={isShow} headler={this.regetone} name={'password'} type={"password"} placeholder={"密码:请输入8～20字符，需同时包含英文和数字"} />
                            <FormInputItem headler={this.regetwo} type={"password"} placeholder={'确认密码'} />
                            <FormInputItem isShow={isShow} headler={this.regethree} head={this.createCode} Maths={code} id={'regiImgText'} name={'Img'} placeholder={'请输入图片字符'} />
                            <FormInputItem headler={this.regetfour} head={this.createCode} id={'authCode'} placeholder={'短信验证码'} />
                            <PickerSizesDemo />

                        </Formmimix>
                    </div>

                </div>
            </div>
        )
    }
    //验证码
    componentWillMount() {
        this.createCode()
    }


    //正则判断
    reget() {

        this.elespan = document.getElementsByClassName("pront-bgphone")[0]
        this.elementszeio = document.getElementsByTagName("input")[0]
        var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
        var phoneNum = this.elementszeio.value;//手机号码
        if (reg.test(phoneNum)) {
            this.setState({ Regi: '' })
            this.elespan.style.display = 'block'
        } else {
            this.setState({ Regi: '请填写正确的手机号' })
            this.elespan.style.display = 'none'

        }
        return true;
    }
    regetone() {
        this.elespantwo = document.getElementsByClassName("pront-bgpassword")[0]
        this.elementsone = document.getElementsByTagName("input")[1]
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/; //验证规则
        var phoneNum = this.elementsone.value;//密码
        if (reg.test(phoneNum)) {
            this.setState({ Regi: '' })
            this.elespantwo.style.display = 'block'
        } else {
            this.setState({ Regi: '密码:请输入8～20字符，需同时包含英文和数字' })
            this.elespantwo.style.display = 'none'

        }

    }
    regetwo() {
        this.elementsone = document.getElementsByTagName("input")[1]
        this.elementstwo = document.getElementsByTagName("input")[2]
        if (this.elementstwo.value === this.elementsone.value) {
            this.setState({ Regi: '' })
        } else {
            this.setState({ Regi: '和上次密码不同' })
        }

    }
    regethree() {
        this.elespanthree = document.getElementsByClassName("pront-bgImg")[0]
        this.elementsthree = document.getElementsByTagName("input")[3]
        this.elementspan = document.getElementsByClassName("ImgItem")[0]
        if (this.elementsthree.value.toLowerCase() === this.elementspan.innerHTML.toLowerCase()) {
            this.setState({ Regi: '' })
            this.elespanthree.style.display = 'block'
        } else {
            this.setState({ Regi: '验证码错误' })
            this.elespanthree.style.display = 'none'

        }

    }
    regetfour() {
        this.elementsfour = document.getElementsByTagName("input")[4]
        this.elementspan = document.getElementsByClassName("ImgItem")[0]
        if (this.elementsfour.value.toLowerCase() === this.elementspan.innerHTML.toLowerCase()) {
            this.setState({ Regi: '' })
        } else {
            this.setState({ Regi: '验证码错误' })
        }

    }
    componentWillReceiveProps(nextProps){

        //当路由切换时
        if(this.props.location !== nextProps.location){
            window.scrollTo(0,0)
        }
    }
}
export default connect(state => state, (dispatch) => {
    return {
        UserActions: bindActionCreators(UserActions, dispatch)
    }
})(Register)