import * as Types from '../actions/actionTypes'

const initialState = []

const hotDeal = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_HOT_DEAL:
      state = action.hotDeal
      return [...state]
    default:
      return [...state]
  }
}

export default hotDeal
