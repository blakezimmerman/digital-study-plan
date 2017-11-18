import { combineEpics } from 'redux-observable';
import { getType } from 'client/shared/reduxUtils';
import { routeActions } from './router';
import { filter } from 'rxjs/operators/filter';
import { mapTo } from 'rxjs/operators/mapTo';
import { delay } from 'rxjs/operators/delay';
import { user, authenticated, configured } from 'client/app/login/user.selectors';

const authEpic = (actions$, store) =>
  actions$.ofType('ENTRY', 'LOGIN', 'REGISTER').pipe(
    filter(() => authenticated(store.getState())),
    mapTo(routeActions.DASHBOARD())
  );

const noAuthEpic = (actions$, store) =>
  actions$.ofType('ENTRY', 'CONFIGURE', 'DASHBOARD', 'STUDY_PLAN').pipe(
    delay(300),
    filter(() => !authenticated(store.getState())),
    mapTo(routeActions.LOGIN())
  );

const configEpic = (actions$, store) =>
  actions$.ofType('ENTRY', 'LOGIN', 'REGISTER', 'DASHBOARD', 'STUDYPLAN').pipe(
    filter(() => authenticated(store.getState())),
    filter(() => !configured(store.getState())),
    mapTo(routeActions.CONFIGURE())
  );


export const routerEpic = combineEpics(
  authEpic,
  noAuthEpic,
  configEpic
);
