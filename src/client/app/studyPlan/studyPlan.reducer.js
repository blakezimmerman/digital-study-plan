import { combineReducers } from 'redux';
import { actionCreator, asyncActionCreator, asyncReducer, getType } from 'client/shared/reduxUtils';
import { emptyStudyPlan } from 'client/shared/studyPlans';

export const INIT_STUDY_PLAN = actionCreator('INIT_STUDY_PLAN');
export const RESET_PLAN = actionCreator('RESET_PLAN');
export const SAVE_PLAN = asyncActionCreator('SAVE_PLAN');
export const ADD_SEMESTER = actionCreator('ADD_SEMESTER');

const studyPlan = (state = emptyStudyPlan.plan, action) => {
  switch (action.type) {
    case getType(INIT_STUDY_PLAN):
      return action.payload;
    case getType(RESET_PLAN):
      return {
        majors: action.payload.majors,
        minors: action.payload.minors,
        additional: [],
        semesters: []
      }
    case getType(ADD_SEMESTER):
      return {
        ...state,
        semesters: [
          ...state.semesters,
          []
        ]
      }
    default:
      return state;
  }
}

export const manage = combineReducers({
  studyPlan,
  savePlanReq: asyncReducer(SAVE_PLAN)
});
