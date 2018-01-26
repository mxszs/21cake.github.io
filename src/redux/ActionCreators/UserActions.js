

import {hashHistory} from 'react-router'

const UserActions = {
	registerHandler(data){
		return (dispatch)=>{

				localStorage.userInfo = JSON.stringify(data)	
				dispatch({
						type:'CHANGE_USER_INFO',
						userInfo:data
						})
				
			}	
	},
		logoutHandler(data){
			return (dispatch)=>{
				dispatch({
					type:'REMOVE_USER_INFO'
				})
				localStorage.removeItem('userInfo')
			}
		},
	mineHandler(){	
		return (dispatch)=>{
				dispatch({
					type:'IS_MINE',
				})
				
			}
	}
	
}

export default UserActions
