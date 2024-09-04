import { Map } from 'immutable';
import {
  LOGIN_REQUSET,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

const intialState = Map({
  isNotificationDrawerVisible: false,
  isLoggedIn: false,
  user: null,
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return state
        .set('user', action.payload)
        .set('isLoggedIn', true);
    case LOGIN_FAILURE:
      return state
        .set('user', null)
        .set('isLoggedIn', false);
    case LOGOUT:
      return state
        .set('user', null)
        .set('isLoggedIn', false);
    default:
      return state;
  }
};

export default uiReducer;
