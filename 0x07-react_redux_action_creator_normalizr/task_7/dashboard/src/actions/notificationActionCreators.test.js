import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

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
});
