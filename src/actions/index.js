
import Axios from 'axios'
import * as Types from './actionTypes'
export const actAuthorize = () => {

}

export const actAddPhoneNumber = (phoneNumber) => {
  return {
    type: Types.ADD_PHONE_NUMBER,
    phoneNumber
  }
}

export const actAddUserInformation = (userInformation) => {
  return {
    type: Types.ADD_USER_INFORMATION,
    userInformation
  }
}

export const actFetchHotDealsRequest = () => {
  return async dispatch => {
    const res = await Axios.get('hotdeal')
    dispatch(actFetchHotDeals(res.data))
  }
}

export const actFetchHotDeals = (hotDeal) => {
  return {
    type: Types.FETCH_HOT_DEAL,
    hotDeal
  }
}
