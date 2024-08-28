import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

const opacityChange = {
  '0%': { opacity: 0.5 },
  '100%' : { opacity: 1 },
};

const bounce = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },

const styles = StyleSheet.create({
  notifications: {
    padding: '0',
    backgroundColor: '#ffffff',
    position: 'fixed',
    right: '0',
    top: '0',
    zIndex: '1000',
    width: '100%',
    height: '100%',
    fontSize: '20px',
    display: 'none',
    '@media (min-width: 900px)': {
      width: 'auto',
      height: 'auto',
      backgroundColor: 'transparent',
      fontSize: '16px',
      padding: '10px',
      position: 'relative',
      top: 'auto',
      right: 'auto',
      display: 'block',
    },
  },
  list: {
    padding: '0',
  },
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    padding: '10px',
    ':hover': {
      animationName: [opacityChange, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },
  hidden: {
    display: 'none',
  },
});

class Notifications extends React.Component {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };
  render() {
    const { listNotifications, markNotificationAsRead } = this.props;

    return (
      <div>
        <p>Your notifications</p>
        <ul>
          {listNotifications.map((notification) => (
            <li key={notification.id}>
              {notification.value}
              <button onClick={() => markNotificationAsRead(notification.id)}>Mark as read</button>
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
};

export default Notifications;
