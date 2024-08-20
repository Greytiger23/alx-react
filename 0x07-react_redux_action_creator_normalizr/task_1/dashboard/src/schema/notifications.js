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

export function getAllNotificationsByUser(userId) {
  return notificationsData.default.filter(
    (notification) => notification.author === userId
  );
}

export const normalizedData = normalize(notificationsData.default, [notificaation]);
