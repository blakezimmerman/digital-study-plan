import { combineReducers } from 'redux';
import { actionCreator, asyncActionCreator, asyncReducer } from 'client/shared/reduxUtils';

export const PASSIVE_LOGIN = actionCreator('PASSIVE_LOGIN');
export const LOGIN_REQUEST = asyncActionCreator('LOGIN_REQUEST');
export const REGISTER_REQUEST = asyncActionCreator('REGISTER_REQUEST');

export const login = combineReducers({
  loginRequest: asyncReducer(LOGIN_REQUEST),
  registerRequest: asyncReducer(REGISTER_REQUEST)
});
