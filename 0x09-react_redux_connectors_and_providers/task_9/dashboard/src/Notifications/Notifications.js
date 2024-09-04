import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Notifications = ({ notifications, setNotificationFilter, markAsRead }) => (
  <div>
    <p>List of Notifications</p>
    <button onClick={() => serNotificationFilter('URGENT')}>‼️</button>
    <button onClick={() => setNotificationFilter('DEFAULT')}>💠</button>
    <ul>
      {notifications.map((notification) => (
        <li key={notification.id}>{notification.message}
          <button onClick={() => markAsRead(notification.id)}>Mark as read</button>
        </li>
      ))}
    </ul>
  </div>
);

Notifiacations.propTypes = {
  markAsRead: PropTypes.func.isRequired,
  notifications: PropTypes.array.isRequired,
  setNotificationFilter: PropTypes.func.isRequired,
};

export default Notifications;
