import React, { Component } from 'react';
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

function Notifications() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={css(styles.menuItem, isOpen && styles.hidden)}
        onClick={toggleNotifications}
      >
        Your notifications
      </div>
      {isOpen && (
        <div className={css(styles.notifications)}>
          <p>Here is the list of notifications</p>
          <ul className={css(styles.list)}>
            <NotificationItem type="default" value="Notification 1" />
            <NotificationItem type="urgent" value="Notification 2" />
            <NotificationItem type="default" value="Notification 3" />
          </ul>
        </div>
      )}
    </div>
  );
}

export default Notifications;
