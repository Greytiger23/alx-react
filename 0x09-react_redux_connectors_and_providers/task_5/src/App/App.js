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
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';
import { loginRequest, logout } from '../actions/uiActionCreators';

function App({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, login, logout }) {
  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h1>Welcome back!</h1>
          <button onClick={logout}>Logout</button>
          <button onClick={() => login({ username: 'user', password: 'pass' })}>Login</button>
          {displayDrawer && <div className="notification-drawer">Notifications</div>}
        </div>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isLoggedIn'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
});

const mapDispatchToProps = {
  login: loginRequest,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
