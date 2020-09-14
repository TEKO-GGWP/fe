import * as Types from '../actions/actionTypes'
import * as _ from 'lodash'
const initialState = []

const cart = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TO_CART:
      return [...state, action.cartItem]
    case Types.REMOVE_FROM_CART:
      _.remove(state, (n) => {
        return n
      })
      return [...state]
    default:
      return [...state]
  }
}

export default cart
