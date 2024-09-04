import React, { useContext } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import './Footer.css';
import AppContext from '../App/AppContext';

function Footer({ user }) {
  return (
    <footer>
      <p>Copyright 2024 - Holberton School</p>
      {user && user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </footer>
  );
}

Footer.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
  }),
};

Footer.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

export default connect(mapStateToProps)(Footer);
