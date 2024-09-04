import { bindActionCreators } from 'redux';
import { LOGIN_REQUEST, LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import fetch from 'node-fetch';

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export function logiSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('/dist/login-success.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(loginSuccess());
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export const LoginRequest = (credentials) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    return fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch({ type: LOGIN_SUCCESS, payload: data.user });
        } else {
          dispatch({ type: LOGIN_FAILURE, error: data.error });
        }
      })
      .catch((error) => {
        dispatch({ type: LOGIN_FAILURE, error: error.message });
      });
  };
};

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export const boundUIActionCreators = (dispatch) => bindActionCreators({
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
}, dispatch);
