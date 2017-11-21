import { combineEpics } from 'redux-observable';
import { getType } from 'client/shared/reduxUtils';
import { api, post } from 'client/shared/apiUtils';
import { SAVE_PLAN } from './studyPlan.reducer';
import { REFRESH_SESSION } from '../login/login.reducer';
import { user } from '../login/user.selectors';
import { switchMap } from 'rxjs/operators/switchMap';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { mapTo } from 'rxjs/operators/mapTo';

const submitPlanEpic = (actions$, store) =>
  actions$.ofType(getType(SAVE_PLAN.PENDING)).pipe(
    debounceTime(300),
    switchMap((action) => {
      const state = store.getState();
      const curUser = user(state)
      const studyPlan = {
        programs: curUser.studyPlan.programs,
        plan: state.manage.studyPlan
      };
      return post(api(`users/${curUser.userName}/updateStudyPlan`), studyPlan, SAVE_PLAN);
    })
  );

const submitSuccessEpic = (actions$) =>
  actions$.ofType(getType(SAVE_PLAN.SUCCESS)).pipe(
    mapTo(REFRESH_SESSION())
  );

export const manageEpic = combineEpics(
  submitPlanEpic,
  submitSuccessEpic
);
