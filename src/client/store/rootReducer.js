import { combineReducers } from 'redux';
import { routerReducer as location } from '../router/router';
import { login } from 'client/app/login/login.reducer';
import { configure } from 'client/app/configure/configure.reducer';

const rootReducer = combineReducers({
  location,
  login,
  configure
});

export default rootReducer;
