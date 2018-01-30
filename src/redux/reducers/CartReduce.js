
const defaultState = {
	cars:[]
}

const CartReduce = (state=defaultState,action)=>{
	let new_state = Object.assign({},state)
	
	switch(action.type){
		case 'ADD_NUM':
			new_state.cars =action.cars;
			return new_state;
		case 'INIT_CARTS':
			new_state.cars =action.cars;
			return new_state;
		default:return new_state;
	}
	
}

export default CartReduce