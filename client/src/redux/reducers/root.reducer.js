import { combineReducers } from 'redux';
import { registration } from './registration.reducer';
import { authenticate } from './authentication.reducer';
import { users } from './users.reducer';

export const rootReducer = combineReducers({
	registration,
	authenticate,
	users
});