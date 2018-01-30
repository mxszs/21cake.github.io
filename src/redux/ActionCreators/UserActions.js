

import {hashHistory} from 'react-router'

const UserActions = {
	registerHandler(data){
		return (dispatch)=>{
			//注册存入数据
				localStorage.userInfo = JSON.stringify(data)	
				dispatch({
						type:'CHANGE_USER_INFO',
						userInfo:data
				})
				
			}	
	},
		LoginHandler(data){
			return (dispatch)=>{
					//登录存入数据
					localStorage.userLoginInfo = JSON.stringify(data)	
					dispatch({
							type:'CHANGE_USER_LOGININFO',
							userLoginInfo:data
					})
					
				}	
	},
		logoutHandler(data){
			return (dispatch)=>{
				//清除本地储存
				dispatch({
					type:'REMOVE_USER_INFO'
				})
				localStorage.removeItem('userLoginInfo')
			}
		}
	
}

export default UserActions
