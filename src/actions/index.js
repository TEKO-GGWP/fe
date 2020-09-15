
import Axios from 'axios'
import * as Types from './actionTypes'
import URL from '../../Constants'
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
    const res = await Axios.get(`${URL}/hotdeal`)
    dispatch(actFetchHotDeals(res.data))
  }
}

export const actFetchHotDeals = (hotDeal) => {
  return {
    type: Types.FETCH_HOT_DEAL,
    hotDeal
  }
}
export const actFetchProductByIdRequest = (id) => {
  console.log('run')
  return dispatch => {
    Axios.get(`${URL}/product/${id}`).then(res => dispatch(actFetchProductById(res.data)))
  }
}

export const actFetchProductById = (product) => {
  return {
    type: Types.FETCH_PRODUCT,
    product
  }
}
export const actAddToCart = (cartItem) => {
  return {
    type: Types.ADD_TO_CART,
    cartItem
  }
}
