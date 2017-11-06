import { combineEpics } from 'redux-observable';
import { getType } from 'client/shared/reduxUtils';
import { api, post, passiveLogin } from 'client/shared/apiUtils';
import { PASSIVE_LOGIN, LOGIN_REQUEST, REGISTER_REQUEST } from './login.reducer';
import { routeActions } from 'client/router/router';
import { mapTo } from 'rxjs/add/operator/mapTo';
import { mergeMap } from 'rxjs/add/operator/mergeMap';
import { debounceTime } from 'rxjs/add/operator/debounceTime';

const passiveLoginEpic = (actions$) =>
  actions$.ofType(getType(PASSIVE_LOGIN))
    .mergeMap((action) =>
      passiveLogin(LOGIN_REQUEST)
    );

const loginRequestEpic = (actions$) =>
  actions$.ofType(getType(LOGIN_REQUEST.PENDING))
    .debounceTime(500)
    .mergeMap((action) =>
      post(api('auth/login'), action.payload, LOGIN_REQUEST)
    );

const registerRequestEpic = (actions$) =>
  actions$.ofType(getType(REGISTER_REQUEST.PENDING))
    .debounceTime(500)
    .mergeMap((action) =>
      post(api('users/new'), action.payload, REGISTER_REQUEST)
    );

const loginSuccessEpic = (actions$) =>
  actions$.ofType(getType(LOGIN_REQUEST.SUCCESS))
    .mapTo(routeActions.DASHBOARD());

export const loginEpic = combineEpics(
  passiveLoginEpic,
  loginRequestEpic,
  registerRequestEpic,
  loginSuccessEpic
);
