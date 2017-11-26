import { connect } from 'react-redux';

export const actionCreator = (type) => (payload) => ({ type, payload });

export const asyncActionCreator = (type) => ({
  PENDING: actionCreator(type + '_PENDING'),
  SUCCESS: actionCreator(type + '_SUCCESS'),
  FAILURE: actionCreator(type + '_FAILURE'),
  RESET: actionCreator(type + '_RESET')
});

export const getType = (action) => action().type;

export const isType = (action) => x => x.type === getType(action);

const asyncInitialState = {
  pending: false,
  result: undefined,
  error: undefined
};

export const asyncReducer = (asyncAction) =>
  (state = asyncInitialState, action) => {
    switch (action.type) {
      case (getType(asyncAction.PENDING)):
        return {
          ...state,
          pending: true
        };
      case (getType(asyncAction.SUCCESS)):
        return {
          ...state,
          pending: false,
          result: action.payload,
          error: undefined
        };
      case (getType(asyncAction.FAILURE)):
        return {
          ...state,
          pending: false,
          error: action.payload
        };
      case (getType(asyncAction.RESET)):
        return asyncInitialState;
      default:
        return state;
    }
  };
