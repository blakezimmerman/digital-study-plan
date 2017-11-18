import { combineEpics } from 'redux-observable';
import { getType } from 'client/shared/reduxUtils';
import { api, get, post } from 'client/shared/apiUtils';
import { CONFIG_SUBMIT_PLAN } from './configure.reducer';
import { LOGIN_REQUEST } from '../login/login.reducer';
import { routeActions } from 'client/router/router';
import { user } from '../login/user.selectors';
import { mapTo } from 'rxjs/operators/mapTo';
import { switchMap } from 'rxjs/operators/switchMap';
import { debounceTime } from 'rxjs/operators/debounceTime';

const submitPlanEpic = (actions$, store) =>
  actions$.ofType(getType(CONFIG_SUBMIT_PLAN.PENDING)).pipe(
    debounceTime(300),
    switchMap((action) => {
      const userName = user(store.getState()).userName;
      const studyPlan = store.getState().configure.studyPlan;
      return post(api(`users/${userName}/updateStudyPlan`), studyPlan, CONFIG_SUBMIT_PLAN);
    })
  );

const submitSuccessEpic = (actions$) =>
  actions$.ofType(getType(CONFIG_SUBMIT_PLAN.SUCCESS)).pipe(
    switchMap((action) =>
      get(api('auth/refresh'), LOGIN_REQUEST)
    )
  );

export const configureEpic = combineEpics(
  submitPlanEpic,
  submitSuccessEpic
);
