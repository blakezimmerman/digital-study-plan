import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { routerEpic } from 'client/router/router.epics';
import { loginEpic } from 'client/app/login/login.epics';
import { configureEpic } from 'client/app/configure/configure.epics';
import { manageEpic } from 'client/app/studyPlan/studyPlan.epics';

const rootEpic = combineEpics(
  routerEpic,
  loginEpic,
  configureEpic,
  manageEpic
);

const epicMiddleware = createEpicMiddleware(rootEpic);

export default epicMiddleware;
