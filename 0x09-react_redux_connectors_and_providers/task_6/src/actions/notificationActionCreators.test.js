import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { markAsAread, setNotificationFilter, setLoadingState, setNotifications, fetchNotifications } from './notificationActionCreators';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('notificationActionCreators tests', () => {
  it('should create an action to mark a notification as read', () => {
    const expectedAction = {
      type: MARK_AS_READ,
      index: 1,
    };
    expect(marksAsARead(1)).toEqual(expectedAction);
  });

  it('should create an action to set the notification filter', () => {
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT,
    };
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(expectedAction);
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to set loading state', () => {
    const isLoading = true;
    const expectedAction = {
      type: SET_LOADING_STATE,
      isLoading,
    };
    expect(setLoadingState(isLoading)).toEqual(expectedAction);
  });

  it('should create an action to set notifications', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New notification' },
      { id: 2, type: 'urgent', value: 'Urgent notification' },
    ];
    const expectedAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      notifications: fromJS(notifications),
    };
    expect(setNotifications(notifications)).toEqual(expectedAction);
  });

  it('creates FETCH_NOTIFICATIONS_SUCCESS when fetching notifications has been done', () => {
    fetchMock.getOnce('/notifications.json', {
      body: [{ id: 1, type: 'default', value: 'New notification' }],
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: SET_LOADING_STATE, isLoading: true },
      { type: FETCH_NOTIFICATIONS_SUCCESS, notifications: fromJS([{ id: 1, type: 'default', value: 'New notification' }]) },
      { type: SET_LOADING_STATE, isLoading: false },
    ];
    const store = mockStore({ notifications: fromJS({}) });

    return store.dispatch(fetchNotifications()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
