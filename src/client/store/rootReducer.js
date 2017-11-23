import { combineReducers } from 'redux';
import { routerReducer as location } from '../router/router';
import { login } from 'client/app/login/login.reducer';
import { configure } from 'client/app/configure/configure.reducer';
import { manage } from 'client/app/manage/manage.reducer';

const rootReducer = combineReducers({
  location,
  login,
  configure,
  manage
});

export default rootReducer;
