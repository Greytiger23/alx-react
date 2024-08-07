import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    border: '1px solid #E7E7E7',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    position: 'absolute',
    right: '20px',
    top: '20px',
    zIndex: 1,
  }
});

function Notifications() {
  return (
    <div className={css(styles.notifications)}>
      <p>Here is the list of notifications</p>
      <ul>
        <li>Notification 1</li>
        <li>Notification 2</li>
        <li>Notification 3</li>
      </ul>
    </div>
  );
}

export default Notifications;
