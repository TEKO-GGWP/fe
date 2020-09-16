import * as Types from '../../actions/actionTypes'

const initialState = {
  id: '2',
  name: 'Phong Vũ\'s Choice',
  item: []
}

const phongVuChoice = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PHONG_VU_CHOICE:
      return { ...state, item: [...action.phongVuChoice] }
    default:
      return state
  }
}

export default phongVuChoice
