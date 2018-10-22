import { USERS_GETALL_REQUEST, USERS_GETALL_SUCCESS, USERS_GETALL_FAILURE } from "../constants/user.constants";

export const users = (state = {}, action) => {
    switch (action.type) {
        case USERS_GETALL_REQUEST:
            return {
                loading: true
            };
        case USERS_GETALL_SUCCESS:
            return {
                items: action.user,
                loading: false
            };
        case USERS_GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}