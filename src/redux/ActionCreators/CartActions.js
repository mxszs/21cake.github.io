
import store from '../store'
//import {hashHistory} from 'react-router'

const CartActions = {
			addNumber({id,price,img_url,spec,cutlery_content},img,name,_id){
				//console.log(id,'actions')	
				let car = store.getState().CartReduce.cars.map(good=>good)
				let isHas = car.some(item=>{
						if(item.id===id&&item.spec===spec){
						//判断id与磅数,如果id相同，数量加1，id不同，执行else中的逻辑代码
							item.num++;
							return true
						}else{
							return false
						}
				})
					if(!isHas){
						car.push({//如果isHas为假，就新存入一条
							cutlery_content,name,img,spec,id,price,img_url,num:1
						})
					}
					localStorage.cars = JSON.stringify(car)//同步数据
				return (dispatch)=>{
					dispatch({
						type:'ADD_NUM',
						cars:car
					})
				}
				
				
			},
			reduceGood({id,spec}){
				let car =  store.getState().CartReduce.cars.map(good=>good)//每次都返回新的数据
				for(var i =0;i<car.length;i++){//减少数量的方法
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
			removeGood({id,spec}){//移除商品的方法
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
			//全部删除的方法
				return (dispatch)=>{
					
					dispatch({
						type:'DELETEGOOD_GOOD',
					})
					localStorage.removeItem('cars')
				}
			},
		initCars(){
			//初始化购物车的方法
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
