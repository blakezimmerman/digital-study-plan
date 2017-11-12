import { combineEpics } from 'redux-observable';
import { getType } from 'client/shared/reduxUtils';
import { routeActions } from './router';
import { filter } from 'rxjs/operators/filter';
import { mapTo } from 'rxjs/operators/mapTo';
import { delay } from 'rxjs/operators/delay';

const authenticated = (store) =>
  !!store.getState().login.loginRequest.result;

const configured = (store) =>
  !!Object.keys(store.getState().login.loginRequest.result.studyPlan).length;

const authEpic = (actions$, store) =>
  actions$.ofType('ENTRY', 'LOGIN', 'REGISTER').pipe(
    filter(() => authenticated(store)),
    mapTo(routeActions.DASHBOARD())
  );

const noAuthEpic = (actions$, store) =>
  actions$.ofType('ENTRY', 'DASHBOARD', 'STUDY_PLAN').pipe(
    delay(300),
    filter(() => !authenticated(store)),
    mapTo(routeActions.LOGIN())
  );

const configEpic = (actions$, store) =>
  actions$.ofType('ENTRY', 'LOGIN', 'REGISTER', 'DASHBOARD', 'STUDYPLAN').pipe(
    filter(() => authenticated(store)),
    filter(() => !configured(store)),
    mapTo(routeActions.CONFIGURE())
  );


export const routerEpic = combineEpics(
  authEpic,
  noAuthEpic,
  configEpic
);
