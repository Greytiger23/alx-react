import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

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
