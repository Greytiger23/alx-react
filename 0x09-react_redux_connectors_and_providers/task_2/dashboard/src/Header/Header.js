import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/uiActionCreators';
import logo from '../assets/logo.png';
import AppContext from '../App/AppContext';

function Header({ user, logout }) {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.title)}>School dashboard</h1>
        {user && user.isLoggedIn && (
          <section id="logoutSection">
            Welcome {user.email} (<a href="#" onClick={logOut}>Logout</a>)
          </section>
        )}
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
  }),
  logout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
