import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.png';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #E7E7E7',
  },
  logo: {
    width: '200px',
    height: '200px',
  },
  title: {
    fontSize: '24px',
    color: '#000',
    marginLeft: '20px',
  }
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </header>
  );
};

export default Header;
