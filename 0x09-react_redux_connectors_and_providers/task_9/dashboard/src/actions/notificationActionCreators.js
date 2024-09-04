import ( bindactionCreators ) from 'redux';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import axios from 'axios';

export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export const boundNotificationCreators = (dispatch) => bindActionCreators({
  markAsAread,
  setNotificationFilter,
}, dispatch);

export const SET_LOADING_STATE = 'SET_LOADING_STATE';
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading,
});

export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  notifications,
});

export const fetchNotifications = () => async (dispatch) => {
  try {
    dispatch(setLoadingState(true));
    const response = await axios.get('/notifications.json');
    dispatch(setNotifications(response.data));
  } catch (error) {
    console.error('Error fetching notifications:', error);
  } finally {
    dispatch(setLoadingState(false));
  }
};
