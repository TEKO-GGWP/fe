
import * as Types from './actionTypes'
import { URL } from '../../Constants'
import Axios from 'axios'
export const actAddUserInformation = (userInformation) => {
  return {
    type: Types.ADD_USER_INFORMATION,
    userInformation
  }
}
export const actAddPhoneNumber = (phoneNumber) => {
  return {
    type: Types.ADD_PHONE_NUMBER,
    phoneNumber
  }
}
export const actFetchProductByIdRequest = (sku) => {
  return dispatch => {
    return Axios.get(`${URL}/product/${sku}`)
      .then(res => dispatch(actFetchProductById(res.data)))
  }
}
export const actFetchProductById = (product) => {
  return {
    type: Types.FETCH_PRODUCT,
    product
  }
}

export const actFetchHotDealRequest = () => {
  return dispatch => {
    return Axios.get(`${URL}/product-range?from=${0}&offset=${4}`)
      .then(res => dispatch(actFetchHotDeal(res.data)))
  }
}
export const actFetchHotDeal = (hotDeal) => {
  return {
    type: Types.FETCH_HOT_DEAL,
    hotDeal
  }
}

export const actFetchItChoiceRequest = () => {
  return dispatch => {
    return Axios.get(`${URL}/product-range?from=${4}&offset=${4}`)
      .then(res => dispatch(actFetchItChoice(res.data)))
  }
}
export const actFetchItChoice = (itChoice) => {
  return {
    type: Types.FETCH_IT_CHOICE,
    itChoice
  }
}

export const actFetchOfficerChoiceRequest = () => {
  return dispatch => {
    return Axios.get(`${URL}/product-range?from=${8}&offset=${4}`)
      .then(res => dispatch(actFetchOfficerChoice(res.data)))
  }
}
export const actFetchOfficerChoice = (officerChoice) => {
  return {
    type: Types.FETCH_OFFICER_CHOICE,
    officerChoice
  }
}

export const actFetchPhongVuChoiceRequest = () => {
  return dispatch => {
    return Axios.get(`${URL}/product-range?from=${8}&offset=${4}`)
      .then(res => dispatch(actFetchPhongVuChoice(res.data)))
  }
}
export const actFetchPhongVuChoice = (phongVuChoice) => {
  return {
    type: Types.FETCH_PHONG_VU_CHOICE,
    phongVuChoice
  }
}

export const actFetchSimilarProductsRequest = () => {
  return dispatch => {
    return Axios.get(`${URL}/product-range?from=${8}&offset=${4}`)
      .then(res => dispatch(actFetchSimilarProducts(res.data)))
  }
}
export const actFetchSimilarProducts = (products) => {
  return {
    type: Types.FETCH_SIMILAR_PRODUCTS,
    products
  }
}

export const actFetchSameBrandProductsRequest = () => {
  return dispatch => {
    return Axios.get(`${URL}/product-range?from=${8}&offset=${4}`)
      .then(res => dispatch(actFetchSameBrandProducts(res.data)))
  }
}
export const actFetchSameBrandProducts = (products) => {
  return {
    type: Types.FETCH_SAME_BRAND_PRODUCTS,
    products
  }
}

// Cart
export const actAddToCart = product => {
  return {
    type: Types.ADD_TO_CART,
    product
  }
}
export const actRemoveFromCart = sku => {
  return {
    type: Types.REMOVE_FROM_CART,
    sku
  }
}
export const actSubtractQuantity = sku => {
  return {
    type: Types.SUB_QUANTITY,
    sku
  }
}
export const actAddQuantity = sku => {
  return {
    type: Types.ADD_QUANTITY,
    sku
  }
}
export const actEmptyCart = () => {
  return {
    type: Types.EMPTY_CART
  }
}

// Search
export const actFetchProductsByNameRequest = (keyword) => {
  return dispatch => {
    return Axios.get(`https://bab9d49ea291.in.ngrok.io/query?q=${keyword}`)
      .then(res => dispatch(actFetchProductsByName(res.data))
      )
  }
}
export const actFetchProductsByName = (products) => {
  return {
    type: Types.FETCH_PRODUCTS_BY_NAME,
    products
  }
}
