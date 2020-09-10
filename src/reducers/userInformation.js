import * as Types from '../actions/actionTypes'

const initialState = {}

const userInformation = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_PHONE_NUMBER:
      return { ...state, phoneNumber: action.phoneNumber }
    case Types.ADD_USER_INFORMATION:
      return { ...state, ...action.userInformation }
    default:
      return state
  }
}

export default userInformation
