import React, { useContext } from 'react';
import './Footer.css';
import AppContext from '../App/AppContext';

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <footer>
      <p>Copyright 2024 - Holberton School</p>
      {user.isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </footer>
  );
};

export default Footer;
