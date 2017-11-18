import { combineEpics } from 'redux-observable';
import { getType } from 'client/shared/reduxUtils';
import { api, post, passiveLogin } from 'client/shared/apiUtils';
import { PASSIVE_LOGIN, LOGIN_REQUEST, REGISTER_REQUEST } from './login.reducer';
import { routeActions } from 'client/router/router';
import { mapTo } from 'rxjs/operators/mapTo';
import { switchMap } from 'rxjs/operators/switchMap';
import { debounceTime } from 'rxjs/operators/debounceTime';

const passiveLoginEpic = (actions$) =>
  actions$.ofType(getType(PASSIVE_LOGIN)).pipe(
    switchMap((action) =>
      passiveLogin(LOGIN_REQUEST)
    )
  );

const loginRequestEpic = (actions$) =>
  actions$.ofType(getType(LOGIN_REQUEST.PENDING)).pipe(
    debounceTime(300),
    switchMap((action) =>
      post(api('auth/login'), action.payload, LOGIN_REQUEST)
    )
  );

const registerRequestEpic = (actions$) =>
  actions$.ofType(getType(REGISTER_REQUEST.PENDING)).pipe(
    debounceTime(500),
    switchMap((action) =>
      post(api('users/new'), action.payload, REGISTER_REQUEST)
    )
  );

const loginSuccessEpic = (actions$) =>
  actions$.ofType(getType(LOGIN_REQUEST.SUCCESS)).pipe(
    mapTo(routeActions.DASHBOARD())
  );

export const loginEpic = combineEpics(
  passiveLoginEpic,
  loginRequestEpic,
  registerRequestEpic,
  loginSuccessEpic
);
