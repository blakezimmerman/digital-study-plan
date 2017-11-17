import { createSelector } from 'reselect';

export const user = (state) => state.login.loginRequest.result;

export const configured = createSelector(
  user,
  (user) => !!user && !!Object.keys(user.studyPlan).length
);
