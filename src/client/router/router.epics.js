import { combineEpics } from 'redux-observable';
import { getType } from 'client/shared/reduxUtils';
import { routeActions } from './router';
import { filter } from 'rxjs/add/operator/filter';
import { mapTo } from 'rxjs/add/operator/mapTo';

const authenticated = (store) =>
  !!store.getState().login.loginRequest.result;

const authEpic = (actions$, store) =>
  actions$.ofType('ENTRY', 'LOGIN', 'REGISTER')
    .filter(() => authenticated(store))
    .mapTo(routeActions.DASHBOARD());

const noAuthEpic = (actions$, store) =>
  actions$.ofType('ENTRY', 'DASHBOARD', 'STUDY_PLAN')
    .filter(() => !authenticated(store))
    .mapTo(routeActions.LOGIN());

export const routerEpic = combineEpics(
  authEpic,
  noAuthEpic
);
