import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppContext, { defaultUser } from './AppContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActions';

function App({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer }) {
  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h1>Welcome back!</h1>
          <button onClick={displayNotificationDrawer}>Show Notifications</button>
          <button onClick={hideNotificationDrawer}>Hide Notifications</button>
          {displayDrawer && <div className="notification-drawer">Notifications</div>}
        </div>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isLoggedIn,
    displayDrawer: state.ui.isNotificationDrawerVisible,
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
