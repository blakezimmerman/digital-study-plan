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

export const studyPlan = createSelector(
  user, (user) => user.studyPlan
);

export const programs = createSelector(
  studyPlan, (studyPlan) => studyPlan.programs
);

export const plan = createSelector(
  studyPlan, (studyPlan) => studyPlan.plan
);

export const creditsCompleted = createSelector(
  plan,
  (plan) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const credits = plan.semesters.reduce((total, cur) => {
      if (cur.year < year ||
         (cur.year === year &&
          (cur.term === 'Spring' && month >= 5 ||
           cur.term === 'Summer' && month >= 9 ||
           cur.term === 'Fall' && month === 12))
      ) {
        return total + cur.courses.reduce((y, x) => y + x.credits, 0);
      }
      return total;
    }, 0);
    return credits;
  }
);

export const reqCredits = createSelector(
  programs,
  (programs) =>
    programs.majors.reduce((total, major) =>
      total + major.semesters.reduce((totalSem, semester) =>
        totalSem + semester.reduce((y, x) => y + x.credits, 0)
      , 0)
    , 0)
    +
    programs.minors.reduce((total, minor) =>
      total + minor.courses.reduce((y, x) => y + x.credits, 0)
    , 0)
);

export const upcomingSemester = createSelector(
  plan,
  ({ semesters }) => {
    const now = new Date();
    const isFallReg = now.getMonth() > 2 && now.getMonth() < 9;
    const term = isFallReg ? 'Fall' : 'Spring';
    const year = isFallReg ? now.getFullYear() : now.getFullYear() + 1;
    for (let i in semesters) {
      if (semesters[i].term === term && semesters[i].year === year) {
        return semesters[i];
      }
    }
  }
);
