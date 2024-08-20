import * as notificationsData from '../notifications.json';

export function getAllNotificationsByUser(userId) {
  return notificationsData.default.filter(
    (notification) => notification.author === userId
  );
}
