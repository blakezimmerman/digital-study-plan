import { createSelector } from 'reselect';

export const pastPlan = (state) => state.manage.studyPlan.past;
export const curPlan = (state) => state.manage.studyPlan.present;
export const futurePlan = (state) => state.manage.studyPlan.future;

export const curMajors = createSelector(
  curPlan, (plan) => plan.majors
);

export const curMinors = createSelector(
  curPlan, (plan) => plan.minors
);

export const curAdditional = createSelector(
  curPlan, (plan) => plan.additional
);
export const curSemesters = createSelector(
  curPlan, (plan) => plan.semesters
);

export const canUndoPlan = createSelector(
  pastPlan, (plan) => !!plan.length
);

export const canRedoPlan = createSelector(
  futurePlan, (plan) => !!plan.length
);
