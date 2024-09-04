import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications, setNotificationFilter, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import Notifications from './Notifications';

const NotificationsContainer = ({
  notifications,
  fetchNotifications,
  setNotificationFilter,
  markAsRead,
}) => {

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <Notifications
      notifications={notifications}
      setNotificationFilter={setNotificationFilter}
      markAsRead={markAsRead}
    />
  );
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  setNotificationFilter,
  markAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
