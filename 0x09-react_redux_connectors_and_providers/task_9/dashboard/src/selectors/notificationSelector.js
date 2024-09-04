import { createSelector } from 'reselect';

const getFilter = (state) => state.notification.get('filter');
const getNotifications = (state) => state.notifications.get('entities');

export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getFiliter],
  (notifications, filter) => {
    return notifications.valueSeq().filter((notification => {
      const isUnread = !notification.get('isRead');
      const isUrgent = notification.get('type') === 'urgent';

      if (filter === 'default') {
        return isUnread;
      } else if (filter === 'urgent') {
        return isUnread && isUrgent;
      }

      return false;
    }).toList();
  }
);
