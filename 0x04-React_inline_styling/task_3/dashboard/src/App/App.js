import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    padding: '20px',
    margin: '0',
    fontFamily: 'Arial, sans-serif',
  },
  footer: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    borderTop: '1px solid #E7E7E7',
    padding: '10px 0',
    backgroundColor: '#ffffff',
  }
});

function App() {
  return (
    <div className={css(styles.body)}>
      {/* Your components go here */}
      <footer className={css(styles.footer)}>
        Copyright 2020 - Holberton School
      </footer>
    </div>
  );
}

export default App;
