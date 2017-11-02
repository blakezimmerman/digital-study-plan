import { combineReducers } from 'redux';
import { routerReducer } from '../router/router';

const rootReducer = combineReducers({ location: routerReducer });

export default rootReducer;
