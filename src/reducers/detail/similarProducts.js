import * as Types from '../../actions/actionTypes'

const initialState = []

const similarProducts = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_SIMILAR_PRODUCTS:
      return [...state, action.products]
    default:
      return [...state]
  }
}

export default similarProducts
