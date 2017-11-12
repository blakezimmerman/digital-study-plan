import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import { actionCreator } from '../shared/reduxUtils';

const history = createHistory()

const routesMap = {
  ENTRY: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  CONFIGURE: '/configure',
  DASHBOARD: '/dashboard',
  STUDY_PLAN: '/studyplan'
}

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap)

export { reducer as routerReducer };
export { middleware as routerMiddleware };
export { enhancer as routerEnhancer };

// Create actions for navigation
export const routeActions = {
  ENTRY: actionCreator('ENTRY'),
  LOGIN: actionCreator('LOGIN'),
  REGISTER: actionCreator('REGISTER'),
  CONFIGURE: actionCreator('CONFIGURE'),
  DASHBOARD: actionCreator('DASHBOARD'),
  STUDY_PLAN: actionCreator('STUDY_PLAN')
};
