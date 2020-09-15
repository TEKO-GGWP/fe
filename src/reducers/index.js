import { combineReducers } from 'redux'
import userInformation from './userInformation'
import hotDeal from './hotDeal'
import cart from './cart'
import product from './product'
const initialState = null
const appReducers = combineReducers({
  userInformation,
  hotDeal,
  cart,
  product
})
const rootReducer = (state = initialState, action) => {
  return appReducers(state, action)
}

export default rootReducer
