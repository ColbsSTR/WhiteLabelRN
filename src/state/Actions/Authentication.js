import {
  LOGIN,
  LOGIN_START,
  LOGIN_SUCCEEDED,
  LOGIN_FAIL,
} from './ActionTypes';

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const login_start = (data) => {
  return {
    type: LOGIN_START,
    payload: data,
  };
};

export const login_succeed = (data) => {
  return {
    type: LOGIN_SUCCEEDED,
    payload: data,
  };
};

export const login_fail = (data) => {
  return {
    type: LOGIN_FAIL,
    payload: data,
  };
};