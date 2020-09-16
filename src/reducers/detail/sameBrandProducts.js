import * as Types from '../../actions/actionTypes'

const initialState = []

const sameBrandProducts = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_SAME_BRAND_PRODUCTS:
      return [...state, action.products]
    default:
      return [...state]
  }
}

export default sameBrandProducts
