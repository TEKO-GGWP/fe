import * as Types from '../../actions/actionTypes'

const initialState = {
  id: '3',
  name: 'Gợi ý cho dân văn phòng',
  item: []
}

const officerChoice = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_OFFICER_CHOICE:
      return { ...state, item: [...action.officerChoice] }
    default:
      return state
  }
}

export default officerChoice
