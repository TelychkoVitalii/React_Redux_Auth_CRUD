import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from '../../constants/account/register.constants';

export const userRegisterRequest = (firstname, lastname, email, password) => {
  return {
    type: USER_REGISTER_REQUEST,
    firstname, lastname, email, password
  }
};

export const userRegisterRequestSuccess = payload => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload
  }
};

export const userRegisterRequestFailure = error => {
  return{
    type: USER_REGISTER_FAILURE,
    error
  }
};