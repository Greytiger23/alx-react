import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SELECT_COURSE,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const intialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('should return the intial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER by setting isNotificationDrawerVisible', () => {
    const state = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toBe(true);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER by setting isNotificationDrawerVisible to false', () => {
    const state = uiReducer(
      { ...initialState, isNotificationDrawerVisible: true },
      { type: HIDE_NOTIFICATION_DRAWER }
    );
    expect(state.isNotificationDrawerVisible).toBe(false);
  });

  it('should handle LOGIN_SUCCESS by setting isUserLoggedIn to true', () => {
    const state = uiReducer(initialstate, { type: LOGIN_SUCCESS });
    expect(state.isUserLoggedIn).toBe(true);
  });

  it('should handle LOGIN_FAILURE by setting isUserLoggedIn to false', () => {
    const state = uiReducer(initialState, { type: LOGIN_FAILURE });
    expect(state.isUserLoggedIn).toBe(false);
  });

  it('should handle LOGOUT by setting isUserLoggedIn to false', () => {
    const state = uiReducer(
      { ...initialState, isUserLoggedIn: true },
      { type: LOGOUT }
    );
    expect(state.isUserLoggedIn).toBe(false);
  });
});