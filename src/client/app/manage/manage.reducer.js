import { combineReducers } from 'redux';
import undoable, { excludeAction } from 'redux-undo';
import { actionCreator, asyncActionCreator, asyncReducer, isType, getType } from 'client/shared/reduxUtils';
import { clone, match, is } from 'client/shared/miscUtils';
import { emptyStudyPlan } from 'client/shared/studyPlans';

export const INIT_STUDY_PLAN = actionCreator('INIT_STUDY_PLAN');
export const RESET_PLAN = actionCreator('RESET_PLAN');
export const SAVE_PLAN = asyncActionCreator('SAVE_PLAN');
export const ADD_SEMESTER = actionCreator('ADD_SEMESTER');
export const CHANGE_TERM = actionCreator('CHANGE_TERM');
export const NEW_COURSE = actionCreator('NEW_COURSE');
export const ADD_TO_PLAN = actionCreator('ADD_TO_PLAN');
export const REORDER = actionCreator('REORDER');
export const UNDO_PLAN = actionCreator('UNDO_PLAN');
export const REDO_PLAN = actionCreator('REDO_PLAN');
export const CLEAR_PLAN_HISTORY = actionCreator('RESET_PLAN_HISTORY');

export const OPEN_ADD_MODAL = actionCreator('OPEN_ADD_MODAL');
export const CLOSE_ADD_MODAL = actionCreator('CLOSE_ADD_MODAL');

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
    .on(isType(ADD_SEMESTER), action => {
      let term, year;
      if (!state.semesters.length) {
        const now = new Date();
        const isFallReg = now.getMonth() > 2 && now.getMonth() < 9;
        term = isFallReg ? 'Fall' : 'Spring';
        year = isFallReg ? now.getFullYear() : now.getFullYear() + 1;
      } else {
        const lastSem = state.semesters[state.semesters.length - 1]
        term = match(lastSem.term)
          .on(is('Spring', 'Summer'), x => 'Fall')
          .otherwise(x => 'Spring');
        year = lastSem.term === 'Fall' ? lastSem.year + 1 : lastSem.year;
      }
      return {
        ...state,
        semesters: [
          ...state.semesters,
          {
            term: term,
            year: year,
            courses: []
          }
        ]
      };
    })
    .on(isType(CHANGE_TERM), action => {
      const { index, type, value } = action.payload;
      let newSemesters = clone(state.semesters);
      newSemesters[index][type] = value;
      return {
        ...state,
        semesters: newSemesters
      };
    })
    .on(isType(NEW_COURSE), action =>
      ({
        ...state,
        additional: [ ...state.additional, action.payload ]
      })
    )
    .on(isType(ADD_TO_PLAN), action => {
      const { srcId, srcIndex, destId, destIndex } = action.payload;
      const src = srcId.split('-');
      let course, newMajors, newMinors, newAdditional;
      let newSemesters = clone(state.semesters);

      // remove course from majors
      if (src[2]) {
        const newMajorSemester = Array.from(state.majors[src[1]].semesters[src[2]]);
        [course] = newMajorSemester.splice(srcIndex, 1);
        newMajors = Array.from(state.majors);
        newMajors[src[1]].semesters[src[2]] = newMajorSemester;

      } else if (src[1]) {

        // remove course from study plan
        if (src[0] === 'studyPlan') {
          const newSemester = clone(state.semesters[src[1]]);
          [course] = newSemester.courses.splice(srcIndex, 1);
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
      const newSemester = Array.from(state.semesters[semIndex].courses);
      newSemester.splice(destIndex, 0, course);
      newSemesters[semIndex].courses = newSemester;

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
      const result = Array.from(state.semesters[semIndex].courses);
      const [removed] = result.splice(srcIndex, 1);
      result.splice(destIndex, 0, removed);
      const newSemesters = clone(state.semesters);
      newSemesters[semIndex].courses = result;
      return {
        ...state,
        semesters: newSemesters
      };
    })
    .otherwise(action => state);

const initModalsState = {
  addModalOpen: false
}

const modals = (state = initModalsState, action) =>
  match(action)
    .on(isType(OPEN_ADD_MODAL), action => ({ ...state, addModalOpen: true }))
    .on(isType(CLOSE_ADD_MODAL), action => ({ ...state, addModalOpen: false }))
    .otherwise(actions => state);

export const manage = combineReducers({
  studyPlan: undoable(studyPlan, {
    clearHistoryType: getType(CLEAR_PLAN_HISTORY),
    undoType: getType(UNDO_PLAN),
    redoType: getType(REDO_PLAN)
  }),
  savePlanReq: asyncReducer(SAVE_PLAN),
  modals
});
