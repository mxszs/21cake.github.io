
import store from '../store'
import {hashHistory} from 'react-router'

const CartActions = {
			addNumber({id,name,price,img}){	
				let car = store.getState().CartReduce.cars
				let isHas = car.some(item=>{
						if(item.id===id){
							item.num++;
							return true
						}else{
							return false
						}
				})
					if(!isHas){
						car.push({
							id,price,img,name,num:1
						})
					}

				return (dispatch)=>{
					dispatch({
						type:'ADD_NUM',
						cars:car
					})
				}
				
			}

}

export default CartActions
