
import store from '../store'
import {hashHistory} from 'react-router'

const CartActions = {
			addNumber(mock){
				//console.log(mock)	
				let car = store.getState().CartReduce.cars.map(good=>good)
				console.log(mock)
				let isHas = car.some(item=>{
						if(item.id===mock.id){
							console.log(item.id,mock.id,22222222222)
							item.num++;
							return true
						}else{
							return false
						}
				})
					if(!isHas){
						car.push({
							id:mock.id,price:mock.price,img:mock.img_url,num:1
						})
					}
					localStorage.cars = JSON.stringify(car)
				return (dispatch)=>{
					dispatch({
						type:'ADD_NUM',
						cars:car
					})
				}
				
				
			},
		initCars(){
				let cars = localStorage.cars?JSON.parse(localStorage.cars):[]
				console.log(cars,101011)
				 return (dispatch)=>{
					dispatch({
						type:'INIT_CARTS',
						cars:cars
					})
				}
		
	}
	

}

export default CartActions
