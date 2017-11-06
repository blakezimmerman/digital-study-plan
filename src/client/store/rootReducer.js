import { combineReducers } from 'redux';
import { routerReducer as location } from '../router/router';
import { login } from 'client/app/login/login.reducer';

const rootReducer = combineReducers({
  location,
  login
});

export default rootReducer;
