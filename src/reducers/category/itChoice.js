import * as Types from '../../actions/actionTypes'

const initialState = {
  id: '4',
  name: 'Dành cho dân công nghệ',
  item: []
}

const itChoice = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_IT_CHOICE:
      return { ...state, item: [...action.itChoice] }
    default:
      return state
  }
}

export default itChoice
