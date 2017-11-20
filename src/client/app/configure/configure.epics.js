import { combineEpics } from 'redux-observable';
import { getType } from 'client/shared/reduxUtils';
import { api, get, post } from 'client/shared/apiUtils';
import { CONFIG_SUBMIT_PLAN } from './configure.reducer';
import { REFRESH_SESSION } from '../login/login.reducer';
import { user } from '../login/user.selectors';
import { switchMap } from 'rxjs/operators/switchMap';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { mapTo } from 'rxjs/operators/mapTo';

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
    mapTo(REFRESH_SESSION())
  );

export const configureEpic = combineEpics(
  submitPlanEpic,
  submitSuccessEpic
);
