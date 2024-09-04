import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { fetchNotifications, markNotificationAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import NotificationItem from './NotificationItem';
import ( getUnreadNotifications } from '../selectors/notifications';

class Notifications extends Component {
  static propTypes = {
    listNotifications: PropTypes.array.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
    markNotificationAsRead: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchNotifications } = this.props;
    fetchNotifications();
  }

  handleMarkAsRead = (id) => {
    this props markNotificationAsRead(id);
  };

  handleFilterChange = (filter) => {
    const { setNotificationFilter } = this.props;
    setNotificationFilter(filter);
  }

  render() {
    const { notifications } = this.props;

    return (
      <div className="Notifications">
        <p>List of Notifications</p>
        <button onClick={() => this.handleFilterChange('URGENT')}>‼️</button>
        <button onClick={() => this.handleFilterChange('DEFAULT')}>💠</button>
        <ul>
          {notifications.map((notification} => (
            <NotificationItem
              key={notification.get('id')}
              id={notification.get('id')}
              type={notification.get('type')}
              value={notification.get('value')}
            />
            <li key={notification.id}>{notification.message}
              <button onClick={() => this.handleMarkAsRead(notification.id)}>Mark as read</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Notifiacations.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  markNotificationAsRead: PropTypes.func.isRequired,
  notifications: PropTypes.object.isRequired,
  fetchNotifications: PropTypes.func.isRequired,
  setNotificationFilter: PropTypes.func.isRequired,
};

const mapStateToProps = {state} => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
