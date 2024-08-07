import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    padding: '0',
    backgroundColor: '#ffffff',
    position: 'fixed',
    right: '0',
    top: '0',
    zIndex: 1000,
    width: '100%',
    height: '100%',
    fontSize: '20px',
    height: '100%',
    '@media (min-width: 900px)': {
      width: 'auto',
      height: 'auto',
      backgroundColor: 'transparent',
      fontSize: '16px',
      padding: '10px',
      position: 'relative',
      top: 'auto',
      right: 'auto',
    },
  },
  list: {
    padding: '0',
  },
});

function Notifications() {
  return (
    <div className={css(styles.notifications)}>
      <p>Here is the list of notifications</p>
      <ul className={css(styles.list)}>
        <li>Notification 1</li>
        <li>Notification 2</li>
        <li>Notification 3</li>
      </ul>
    </div>
  );
}

export default Notifications;
