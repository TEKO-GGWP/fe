import * as Types from '../../actions/actionTypes'
const initialState = []

const searchResult = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS_BY_NAME:
      return action.products
    default:
      return state
  }
}

export default searchResult
