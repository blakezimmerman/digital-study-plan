import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../rootReducer';
import epicMiddleware from '../rootEpic';
import { routerMiddleware, routerEnhancer } from '../../router/router';
import logger from 'redux-logger';

const store = createStore(
  rootReducer,
  compose(
    routerEnhancer,
    applyMiddleware(epicMiddleware, routerMiddleware, logger)
  )
);

if (module.hot) {
  module.hot.accept('../rootReducer', () =>
    store.replaceReducer(require('../rootReducer').default)
  );
}

export default store;
