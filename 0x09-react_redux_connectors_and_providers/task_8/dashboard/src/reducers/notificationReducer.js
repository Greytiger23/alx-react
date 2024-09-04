import { Map } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationnActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { SET_LOADING, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionCreators';

const initialState = Map({
  notifications: Map(),
  loading: false,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading);

    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({
        notifications: Map(action.notifications),
      });

    case MARK_AS_READ:
      return state.setIn(['notifications'], String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
};

export default notificationReducer;
