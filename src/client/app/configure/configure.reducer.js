import { combineReducers } from 'redux';
import { actionCreator, asyncActionCreator, asyncReducer, isType } from 'client/shared/reduxUtils';
import { clone, match } from 'client/shared/miscUtils';
import { emptyStudyPlan } from 'client/shared/studyPlans';

export const CONFIG_INIT_PLAN = actionCreator('CONFIG_INIT_PLAN');
export const CONFIG_SUBMIT_PLAN = asyncActionCreator('CONFIG_SUBMIT_PLAN');
export const ADD_PROGRAM = actionCreator('ADD_PROGRAM');
export const REMOVE_PROGRAM = actionCreator('REMOVE_PROGRAM');

const studyPlan = (state = emptyStudyPlan, action) =>
  match(action)
    .on(isType(CONFIG_INIT_PLAN), action => clone(action.payload))
    .on(isType(ADD_PROGRAM), action => {
      const addType = action.payload.type === 'Major' ? 'majors' : 'minors';
      const result = [ ...state.programs[addType], action.payload ];
      return {
        ...state,
        programs: {
          ...state.programs,
          [addType]: result
        },
        plan: {
          ...state.plan,
          [addType]: result,
          semesters: []
        }
      }
    })
    .on(isType(REMOVE_PROGRAM), action => {
      const rmType = action.payload.type === 'Major' ? 'majors' : 'minors';
      const result = state.programs[rmType].filter(x => x !== action.payload);
      return {
        ...state,
        programs: {
          ...state.programs,
          [rmType]: result
        },
        plan: {
          ...state.plan,
          [rmType]: result,
          semesters: []
        }
      }
    })
    .otherwise(action => state);

export const configure = combineReducers({
  studyPlan,
  configSubmitReq: asyncReducer(CONFIG_SUBMIT_PLAN)
});
