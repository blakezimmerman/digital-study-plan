import { combineReducers } from 'redux';
import { actionCreator, asyncActionCreator, asyncReducer, getType } from 'client/shared/reduxUtils';
import { emptyPlan } from 'client/shared/studyPlans';

export const CONFIG_INIT_PLAN = actionCreator('CONFIG_INIT_PLAN');
export const CONFIG_SUBMIT_PLAN = asyncActionCreator('CONFIG_SUBMIT_PLAN');
export const ADD_PROGRAM = actionCreator('ADD_PROGRAM');
export const REMOVE_PROGRAM = actionCreator('REMOVE_PROGRAM');

const studyPlan = (state = emptyPlan, action) => {
  switch (action.type) {
    case getType(CONFIG_INIT_PLAN):
      return action.payload;
    case getType(ADD_PROGRAM):
      const addType = action.payload.type === 'Major' ? 'majors' : 'minors';
      return {
        ...state,
        programs: {
          ...state.programs,
          [addType]: [ ...state.programs[addType], action.payload ]
        }
      };
    case getType(REMOVE_PROGRAM):
      const rmType = action.payload.type === 'Major' ? 'majors' : 'minors';
      return {
        ...state,
        programs: {
          ...state.programs,
          [rmType]: state.programs[rmType].filter(x => x !== action.payload)
        }
      };
    default:
      return state;
  }
}

export const configure = combineReducers({
  studyPlan,
  configSubmitReq: asyncReducer(CONFIG_SUBMIT_PLAN)
});
