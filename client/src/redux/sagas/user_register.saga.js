import { call, put, takeEvery } from 'redux-saga/effects';
import { USER_REGISTER_REQUEST } from "../constants/account/register.constants";
import { registerUser } from "../../api/user_register_request";
import { userRegisterRequestSuccess, userRegisterRequestFailure } from "../actions/account/register.actions";
import { message_success, message_error } from "../../utils/messages";

function* registerUserRequest({ firstname, lastname, email, password }) {
  const registerUserParams = yield call(registerUser, firstname, lastname, email, password),
        { success, message } = registerUserParams;
  if(success) {
    yield put(userRegisterRequestSuccess(success));
    message_success(message);
  } else {
    yield put(userRegisterRequestFailure(message));
    message_error(message);
  }
}

export default function* userRegisterSaga() {
  yield takeEvery(USER_REGISTER_REQUEST, registerUserRequest);
}