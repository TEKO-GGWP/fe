import * as Types from '../../actions/actionTypes'

const initialState = {
  id: '1',
  name: 'Hot Deal - Săn Ưu đãi',
  item: []
}

const hotDeal = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_HOT_DEAL:
      return { ...state, item: [...action.hotDeal] }
    default:
      return state
  }
}

export default hotDeal
