import { combineEpics } from 'redux-observable';
import { getType } from 'client/shared/reduxUtils';
import { api, post } from 'client/shared/apiUtils';
import {
  INIT_STUDY_PLAN, CLEAR_PLAN_HISTORY, SAVE_PLAN,
  NEW_COURSE, CLOSE_ADD_MODAL
} from './manage.reducer';
import { REFRESH_SESSION } from '../login/login.reducer';
import { user } from '../login/user.selectors';
import { switchMap } from 'rxjs/operators/switchMap';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { mapTo } from 'rxjs/operators/mapTo';

const initPlanEpic = (actions$) =>
  actions$.ofType(getType(INIT_STUDY_PLAN)).pipe(
    mapTo(CLEAR_PLAN_HISTORY())
  );

const newCourseEpic = (actions$) =>
  actions$.ofType(getType(NEW_COURSE)).pipe(
    mapTo(CLOSE_ADD_MODAL())
  );

const submitPlanEpic = (actions$, store) =>
  actions$.ofType(getType(SAVE_PLAN.PENDING)).pipe(
    debounceTime(300),
    switchMap((action) => {
      const state = store.getState();
      const curUser = user(state)
      const studyPlan = {
        programs: curUser.studyPlan.programs,
        plan: state.manage.studyPlan.present
      };
      return post(api(`users/${curUser.userName}/updateStudyPlan`), studyPlan, SAVE_PLAN);
    })
  );

const submitSuccessEpic = (actions$) =>
  actions$.ofType(getType(SAVE_PLAN.SUCCESS)).pipe(
    mapTo(REFRESH_SESSION())
  );

export const manageEpic = combineEpics(
  initPlanEpic,
  newCourseEpic,
  submitPlanEpic,
  submitSuccessEpic
);
