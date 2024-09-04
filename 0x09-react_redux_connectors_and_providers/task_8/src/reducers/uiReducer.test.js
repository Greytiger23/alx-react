import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SELECT_COURSE,
} from '../actions/uiActionTypes';

describe('uiReducer with Immutable.js', () => {
  const intialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({}),
  });

  it('should return the intial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER by setting isNotificationDrawerVisible', () => {
    const state = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER by setting isNotificationDrawerVisible to false', () => {
    const state = uiReducer(
      initialState.set('isNotificationDrawerVisible', true),
      { type: HIDE_NOTIFICATION_DRAWER }
    );
    expect(state.get('isNotificationDrawerVisible')).toBe(false);
  });

  it('should handle LOGIN_SUCCESS by setting isUserLoggedIn to true', () => {
    const state = uiReducer(initialstate, { type: LOGIN_SUCCESS });
    expect(state.get('isUserLoggedIn')).toBe(true);
  });

  it('should handle LOGIN_FAILURE by setting isUserLoggedIn to false', () => {
    const state = uiReducer(initialState, { type: LOGIN_FAILURE });
    expect(state.get('isUserLoggedIn')).toBe(false);
  });

  it('should handle LOGOUT by setting isUserLoggedIn to false', () => {
    const state = uiReducer(
      initialState.set('isUserLoggedIn', true),
      { type: LOGOUT }
    );
    expect(state.get('isUserLoggedIn')).toBe(false);
  });
});

describe('uiReducer', () => {
  it('handles LOGIN_SUCCESS', () => {
    const initialState = fromJS({
      user: null,
      isLoggedIn: false,
    });
    const action = {
      type: LOGIN_SUCCESS,
      payload: { id: 1, name: 'John Doe' },
    };
    const expectedState = fromJS({
      user: { id: 1, name: 'John Doe' },
      isLoggedIn: true,
    });
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  it('handles LOGOUT', () => {
    const initialState = fromJS({
      user: { id: 1, name: 'John Doe' },
      isLoggedIn: true,
    });
    const action = { type: LOGOUT };
    const expectedState = fromJS({
      user: null,
      isLoggedIn: false,
    });
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });
});
