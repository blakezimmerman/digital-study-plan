import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../rootReducer';
import epicMiddleware from '../rootEpic';

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

export default store;
