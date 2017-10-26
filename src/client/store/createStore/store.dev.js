import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../rootReducer';
import epicMiddleware from '../rootEpic';
import logger from 'redux-logger';

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware, logger)
);

if (module.hot) {
  module.hot.accept('../rootReducer', () =>
    store.replaceReducer(require('../rootReducer').default)
  );
}

export default store;
