import { combineReducers } from 'redux'
import userInformation from './userInformation'
import hotDeal from './hotDeal'

const rootReducer = combineReducers({
  userInformation,
  hotDeal
})

export default rootReducer
