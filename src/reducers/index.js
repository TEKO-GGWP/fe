import { combineReducers } from 'redux'
import userInformation from './userInformation'
import hotDeal from './category/hotDeal'
import officerChoice from './category/officerChoice'
import phongVuChoice from './category/phongVuChoice'
import itChoice from './category/itChoice'
import sameBrandProducts from './detail/sameBrandProducts'
import similarProducts from './detail/similarProducts'
import searchResult from './search/searchResult'
import cart from './cart'
import product from './product'
const initialState = null
const appReducers = combineReducers({
  userInformation,
  cart,
  product,
  hotDeal,
  officerChoice,
  phongVuChoice,
  itChoice,
  sameBrandProducts,
  similarProducts,
  searchResult
})
const rootReducer = (state = initialState, action) => {
  return appReducers(state, action)
}

export default rootReducer
