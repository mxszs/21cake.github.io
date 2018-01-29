
import {combineReducers} from 'redux'

import User from './reducers/User'
import CartReduce from './reducers/CartReduce'

const reducer = combineReducers({User,CartReduce})

export default reducer 