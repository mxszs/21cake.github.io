
const defaultState = {
	userInfo:localStorage.userInfo?JSON.parse(localStorage.userInfo):[],
	isMine:false
}

const User = (state=defaultState,action)=>{
	let new_state = Object.assign({},defaultState)
	
	switch(action.type){
		
		case 'CHANGE_USER_INFO':
			new_state.userInfo = action.userInfo;			
			return new_state;break;
		
		case 'REMOVE_USER_INFO':
			new_state.userInfo = null;
			return new_state;break;
		case 'IS_MINE':
			new_state.isMine = !action.isMine;
			return new_state;break;
		
		default:return new_state;
	}
	
}

export default User