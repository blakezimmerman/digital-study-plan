import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';

const history = createHistory()

const routesMap = {
  ENTRY: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
}

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap)

export { reducer as routerReducer };
export { middleware as routerMiddleware };
export { enhancer as routerEnhancer };
