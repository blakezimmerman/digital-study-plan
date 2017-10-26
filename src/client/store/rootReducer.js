import { combineReducers } from 'redux';

const placeholderState = 'placeholder';
const placeholderReducer = (state = placeholderState) => placeholderState;

const rootReducer = combineReducers({placeholderReducer});

export default rootReducer;
