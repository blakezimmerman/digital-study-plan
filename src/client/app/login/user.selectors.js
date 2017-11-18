import { createSelector } from 'reselect';

export const user = (state) => state.login.loginRequest.result;
export const loginError = (state) => state.login.loginRequest.error;

export const authenticated = createSelector(
  user, loginError,
  (user, loginError) => !!user && !loginError
);

export const configured = createSelector(
  user,
  (user) =>
    !!user &&
    !!Object.keys(user.studyPlan).length &&
    !!user.studyPlan.programs.majors.length
);
