import { normalize, schema } from 'normalizr';
import * as notificationsData from '../notifications.json';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications');
export const notificationsNormalizer = (data) => normalize(data, [notification]);

export const normalizedData = normalize(notificationsData.default, [notification]);

export function getAllNotificationsByUser(userId) {
  const { notifications, users, messages } = normalizedData.entities;

  return Object.values(notifications).filter(notification => notification.author === userId).map(notification => ({
    ...notifaction,
    author: users[notification.author],
    context: messages[notification.context],
  }));
}
