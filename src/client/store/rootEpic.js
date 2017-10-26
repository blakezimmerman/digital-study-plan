import { combineEpics, createEpicMiddleware } from 'redux-observable';

const rootEpic = combineEpics( );

const epicMiddleware = createEpicMiddleware(rootEpic);

export default epicMiddleware;
