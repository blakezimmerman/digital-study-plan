import { combineReducers } from 'redux';
import { actionCreator, asyncActionCreator, asyncReducer, isType } from 'client/shared/reduxUtils';
import { clone, match } from 'client/shared/miscUtils';
import { emptyStudyPlan } from 'client/shared/studyPlans';

export const INIT_STUDY_PLAN = actionCreator('INIT_STUDY_PLAN');
export const RESET_PLAN = actionCreator('RESET_PLAN');
export const SAVE_PLAN = asyncActionCreator('SAVE_PLAN');
export const ADD_SEMESTER = actionCreator('ADD_SEMESTER');
export const ADD_TO_PLAN = actionCreator('ADD_TO_PLAN');
export const REORDER = actionCreator('REORDER');

const studyPlan = (state = emptyStudyPlan.plan, action) =>
  match(action)
    .on(isType(INIT_STUDY_PLAN), action => clone(action.payload))
    .on(isType(RESET_PLAN), action =>
      ({
        majors: clone(action.payload.majors),
        minors: clone(action.payload.minors),
        additional: [],
        semesters: []
      })
    )
    .on(isType(ADD_SEMESTER), action =>
      ({
        ...state,
        semesters: [
          ...state.semesters,
          []
        ]
      })
    )
    .on(isType(ADD_TO_PLAN), action => {
      const { srcId, srcIndex, destId, destIndex } = action.payload;
      const src = srcId.split('-');
      let course, newMajors, newMinors, newAdditional;
      let newSemesters = Array.from(state.semesters);

      // remove course from majors
      if (src[2]) {
        const newMajorSemester = Array.from(state.majors[src[1]].semesters[src[2]]);
        [course] = newMajorSemester.splice(srcIndex, 1);
        newMajors = Array.from(state.majors);
        newMajors[src[1]].semesters[src[2]] = newMajorSemester;

      } else if (src[1]) {

        // remove course from study plan
        if (src[0] === 'studyPlan') {
          const newSemester = Array.from(state.semesters[src[1]]);
          [course] = newSemester.splice(srcIndex, 1);
          newSemesters[src[1]] = newSemester;

        // remove course from minors
        } else {
          const newMinor = { ...state.minors[src[1]] };
          [course] = newMinor.courses.splice(srcIndex, 1);
          newMinors = Array.from(state.minors);
          newMinors[src[1]] = newMinor;
        }

      // remove course from additional
      } else {
        newAdditional = Array.from(state.additional);
        [course] = newAdditional.splice(srcIndex, 1);
      }

      // add course to study plan
      const semIndex = destId.split('-')[1];
      const newSemester = Array.from(state.semesters[semIndex]);
      newSemester.splice(destIndex, 0, course);
      newSemesters[semIndex] = newSemester;

      // return new study plan
      return {
        majors: newMajors || state.majors,
        minors: newMinors || state.minors,
        additional: newAdditional || state.additional,
        semesters: newSemesters || state.semesters
      };
    })
    .on(isType(REORDER), action => {
      const { semIndex, srcIndex, destIndex } = action.payload;
      const result = Array.from(state.semesters[semIndex]);
      const [removed] = result.splice(srcIndex, 1);
      result.splice(destIndex, 0, removed);
      const newSemesters = Array.from(state.semesters);
      newSemesters[semIndex] = result;
      return {
        ...state,
        semesters: newSemesters
      };
    })
    .otherwise(action => state);

export const manage = combineReducers({
  studyPlan,
  savePlanReq: asyncReducer(SAVE_PLAN)
});
