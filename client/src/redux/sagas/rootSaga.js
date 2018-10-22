import { all } from 'redux-saga/effects';
import userRegisterSaga from './user_register.saga';

export default function* rootSaga() {
  yield all([
    userRegisterSaga()
  ])
}