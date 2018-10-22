import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE  } from "../constants/account/register.constants";

const initialState = {
  loading: false,
  hasRegister: false,
  error: null
};
export const registration = (state = initialState, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
            return {
              ...state,
              loading: true,
              hasRegister: false
            };
      case USER_REGISTER_SUCCESS:
            return {
              ...state,
              loading: false,
              hasRegister: true
            };
      case USER_REGISTER_FAILURE:
            return {
              ...state,
              error: action.error
            };
        default:
            return state;
    }
};
