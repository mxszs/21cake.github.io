
import store from '../store'
import {hashHistory} from 'react-router'

const CartActions = {
			addNumber({id,price,img_url,spec},img,name){
				console.log(id,'actions')	
				let car = store.getState().CartReduce.cars.map(good=>good)
				let isHas = car.some(item=>{
						if(item.id===id&&item.spec===spec){
							item.num++;
							return true
						}else{
							return false
						}
				})
					if(!isHas){
						car.push({
							name,img,spec,id,price,img_url,num:1
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
			reduceGood({id,spec}){
				let car =  store.getState().CartReduce.cars.map(good=>good)
				for(var i =0;i<car.length;i++){
					if(car[i].id===id){
						car[i].num--;
						if(car[i].num<=1){
							car[i].num=1
						}
					}
				}
					localStorage.cars = JSON.stringify(car)
					return (dispatch)=>{
					dispatch({
						type:'REDUCE_GOOD',
						cars:car
					})
				}
			},
			removeGood({id,spec}){
				let car =  store.getState().CartReduce.cars.map(good=>good)
				for(var i =0;i<car.length;i++){
					if(car[i].id===id&&car[i].spec===spec){
						car.splice(i,1)
					}
				}
					localStorage.cars = JSON.stringify(car)
					return (dispatch)=>{
					dispatch({
						type:'REMOVE_GOOD',
						cars:car
					})
				}
			},
			deleteGood(){
			
				return (dispatch)=>{
					
					dispatch({
						type:'DELETEGOOD_GOOD',
					})
					localStorage.removeItem('cars')
				}
			},
		initCars(){
				let cars = localStorage.cars?JSON.parse(localStorage.cars):[]
				//console.log(cars,101011)
				 return (dispatch)=>{
					dispatch({
						type:'INIT_CARTS',
						cars:cars
					})
				}
		
	}
	

}

export default CartActions
