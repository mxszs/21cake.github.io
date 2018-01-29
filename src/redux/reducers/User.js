
const defaultState = {
	userInfo:localStorage.userInfo?JSON.parse(localStorage.userInfo):[],
	userLoginInfo:localStorage.userLoginInfo?JSON.parse(localStorage.userLoginInfo):[],
	isMine:false
}

const User = (state=defaultState,action)=>{
	let new_state = Object.assign({},defaultState)
	
	switch(action.type){
		
		case 'CHANGE_USER_INFO':
			new_state.userInfo = action.userInfo;			
			return new_state;
		case 'CHANGE_USER_LOGININFO':
			new_state.userLoginInfo = action.userLoginInfo;			
			return new_state;
		case 'REMOVE_USER_INFO':
			new_state.userInfo = null;
			return new_state;
		
		default:return new_state;
	}
	
}

export default User