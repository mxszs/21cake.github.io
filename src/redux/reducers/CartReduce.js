
const defaultState = {
	cars:localStorage.cars?JSON.parse(localStorage.cars):[]
}

const CartReduce = (state=defaultState,action)=>{
	let new_state = Object.assign({},state)
	//购物车
	switch(action.type){
		case 'ADD_NUM':
			new_state.cars =action.cars;
			return new_state;
		case 'INIT_CARTS':
			new_state.cars =action.cars;
			return new_state;
		case 'REDUCE_GOOD':
			new_state.cars =action.cars;
			return new_state;
		case 'REMOVE_GOOD':
			new_state.cars = action.cars;
			return new_state;
		case 'DELETEGOOD_GOOD':
			new_state.cars = [];
			return new_state;
			
		default:return new_state;
	}
	
}

export default CartReduce