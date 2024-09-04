import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
  static propTypes = {
    listNotifications: PropTypes.array.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { listNotifications } = this.props;

    return (
      <div>
        <h2>Your notifications</h2>
        <ul>
          {listNotifications.map(notification => (
            <li key={notification.id}>{notification.message}</li>
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
};

const mapStateToProps = state => ({
  listNotifications: state.notifications.get('notifications').valueSeq().toArray(),
});

const mapDispatchToProps = dispatch => ({
  fetchNotifications: () => dispatch(fetchNotifications()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
