
import * as Types from './actionTypes'
export const actAuthorize = () => {

}

export const actAddPhoneNumber = (phoneNumber) => {
  return {
    type: Types.ADD_PHONE_NUMBER,
    phoneNumber
  }
}

export const actAddUserInformation = (userInformation) => {
  return {
    type: Types.ADD_USER_INFORMATION,
    userInformation
  }
}
