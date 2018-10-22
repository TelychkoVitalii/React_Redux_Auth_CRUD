import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../constants/user.constants";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user} : {};

export const authenticate = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loggedIn: true,
                user: action.user
            };
        case USER_LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case USER_LOGIN_FAILURE:
            return {};
        default:
            return state;
    }
}