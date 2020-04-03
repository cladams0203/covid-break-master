import { combineReducers } from 'redux'
import { cartReducer as cart } from './cartReducer'
import { partReducer as parts} from './partReducer'

export default combineReducers({
    cart, 
    parts
})