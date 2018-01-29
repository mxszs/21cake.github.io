import React, { Component } from 'react';

import size from '../conment/size'



class DbFrom extends Component {
    constructor(props){
        super(props)
        this.state = {
            provinces:[],
            city:[],
            counties:[],
        }
    }

    componentWillMount(){
        // 获取省份
        this.setState({
            provinces:size.getProvinces(),
            city:[],
            counties:[]
        })

    }
    //获取城市 
    getCities(event){
        this.setState({
                city:size.getCities(event.target.value),
                counties:[]
            })
        
    }
    // 获取区县
    getCounties(event){
        this.setState({counties:size.getCounties(event.target.value)})
        
    }

    // 表单验证
    formValidator(){
        formValidator(this.refs)
    }


    render(){
        return (
            <div className="dbfrom"> 
                <div className="db_info">
                    <h2>订单信息</h2>
                    <div className="db_info_content clear">
                        <div className="con_left">
                            <ul>
                                <li>
                                    <label htmlFor="">收货人：</label>
                                    <input type="text" placeholder="收货人姓名" ref="name"/>
                                    <span ref="nameSpan">请输入收货人姓名</span>
                                </li>
                                <li>
                                    <label htmlFor="">联系方式：</label>
                                    <input type="text" placeholder="收货人联系方式" ref="tel"/>
                                    <span ref="telSpan">请输入联系方式</span>
                                    <span ref="noTelSpan">请填写正确的手机号！</span>
                                </li>
                                <li>
                                    <label htmlFor="">城市：</label>
                                    <select onChange={this.getCities.bind(this) } ref="provinces">
                                        <option  value="省">省</option>
                                        {
                                            this.state.provinces.map((item)=>(
                                                <option key={item.id} value={item.name}>{item.name}</option>
                                            ))
                                        }
                                    </select>

                                    <select onChange={this.getCounties.bind(this)} ref="city">
                                        <option value="市">市</option>
                                        {
                                            this.state.city.map((item)=>(
                                                <option key={item.id} value={item.name}>{item.name}</option>
                                            ))
                                        }
                                    </select>

                                    <select ref="counties">
                                        <option value="区/县">区/县</option>
                                        {
                                            this.state.counties.map((item)=>(
                                                <option key={item.id} value={item.name}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                    <span ref="provincesSpan">请选择所在的省份</span>
                                    <span ref="citySpan">请选择所在的市</span>
                                    <span ref="countiesSpan">请选择所在的区/县</span>
                                </li>
                                <li>
                                    <label htmlFor="">详细地址：</label>
                                    <textarea placeholder="请输入详细地址" ref="address"></textarea>
                                    <span ref="addressSpan">请填写配送信息</span>
                                </li>
                                <li>(配送范围：北京、上海、广东、江苏、浙江、天津、安徽、辽宁、山东、河北)</li>
                            </ul>
                        </div>
                        <div className="con_right">
                            <p>
                                商品金额：￥<span>200.00</span>
                            </p>
                            <p>
                            配送费：￥<span>200.00</span>
                            </p>
                            <h4>
                            合计：￥<span>200.00</span>
                            </h4>
                            <p><i>发货及到货时间参考产品详情页说明</i></p>
                            <input onClick={this.formValidator.bind(this,this)} className={this.props.showFrom ? "" : "disable"} disabled={this.props.showFrom?'':"disabled"} type="submit" value="在线付款" />
                            
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default DbFrom;






let formValidator = function(ref){
    //验证是否输入详细地址
    if(!ref.address.value){
        ref.addressSpan.style.display="inline-block"
    }else{
        ref.addressSpan.style.display="none"
        //验证是否输入收货人
        if(!ref.name.value){
            ref.nameSpan.style.display="inline-block"
        }else{
            ref.nameSpan.style.display="none"
        }
        //验证是否输入手机号
        if(!ref.tel.value){
            ref.telSpan.style.display="inline-block"
        }else{
            ref.telSpan.style.display="none"
            //验证手机号是否正确
            if(/^1[3|4|5|7|8][0-9]{9}$/.test(ref.tel.value)){
                ref.noTelSpan.style.display="none"
            }else{
                ref.noTelSpan.style.display="inline-block"
            }
        }
        //验证省份
        if(ref.provinces.value === "省"){
            ref.provincesSpan.style.display="inline-block"
        }else{
            ref.provincesSpan.style.display="none"
            //验证城市
            if(ref.city.value==="市"){ 
                ref.citySpan.style.display="inline-block"
            }else{ 
                ref.citySpan.style.display="none"
                //验证区/县
                if(ref.counties.value==="区/县"){
                    ref.countiesSpan.style.display="inline-block"
                }else{
                    ref.countiesSpan.style.display="none"
                }
            }
          
        }
        
    }
}