import {
  LOGIN_START,
  LOGIN_SUCCEEDED,
  LOGIN_FAIL,
} from '../Actions/ActionTypes';

const initialState = {
  isSignedIn: false,
  isWaiting: false,
  user: null,
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {...state, isWaiting: true};
    case LOGIN_SUCCEEDED:
      return {...state, isSignedIn: true, isWaiting: false, user: action.payload};
    case LOGIN_FAIL:
      return {initialState};
    default:
      return state;
  }
};

export default authentication;