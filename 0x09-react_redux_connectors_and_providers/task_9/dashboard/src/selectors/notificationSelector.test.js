import { Map, fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications, getUnreadNotificationsByType } from './notificationSelector';

describe('notification selectors', () => {
  const initialState = Map({
    filter: 'URGENT',
    notifications: Map({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    })
  });

  it('filterTypeSelected should return the filter value', () => {
    const filter = filterTypeSelected(initialState);
    expect(filter).toEqual('URGENT');
  });

  it('getNotifications should return the notifications Map', () => {
    const notifications = getNotifications(initialState);
    expect(notifications.toJS()).toEqual({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });
  });

  it('getUnreadNotifications should return the unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(initialState);
    expect(unreadNotifications.toJS()).toEqual({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    });
  });
});

describe('getUnreadNotificationsByType selector', () => {
  const state = fromJS({
    notifications: {
      filter: 'URGENT',
      notifications: {
        '1': { id: '1', type: 'default', isRead: false },
        '2': { id: '2', type: 'urgent', isRead: false },
        '3': { id: '3', type: 'urgent', isRead: true },
      },
    },
  });

  it('should return all unread notifications when the filter is DEFAULT', () => {
    const result = getUnreadNotificationsByType(state.setIn(['notifications', 'filter'], 'DEFAULT'));
    expect(result.size).toBe(2);
    expect(result.toJS()).toEqual([
      { id: '1', type: 'default', isRead: false },
      { id: '2', type: 'urgent', isRead: false },
    ]);
  });

  it('should return only unread urgent notifications when the filter is URGENT', () => {
    const result = getUnreadNotificationsByType(state);
    expect(result.size).toBe(1);
    expect(result.toJS()).toEqual([
      { id: '2', type: 'urgent', isRead: false },
    ]);
  });
});
