import * as Types from '../actions/actionTypes'
const initialState = {}

const product = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT:
      console.log('reducer', state)
      return action.product

    default:
      return state
  }
}

export default product
