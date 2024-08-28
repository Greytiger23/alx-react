import { normalize, schema } from 'normalizr';
import * as notificationsData from '../notifications.json';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizedData = normalize(notificationsData.default, [notificaation]);

export function getAllNotificationsByUser(userId) {
  const { notifications, usres, messages } = normalizedData.entites;

  return Object.values(notifications).filter(notification => notification.author === userId).map(notification => ({
    ...notifaction,
    author: users[notification.author],
    context: messages[notification.context],
  }));
}
