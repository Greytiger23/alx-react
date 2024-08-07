import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 0',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
      margin: '0 10px',
    },
  },
  label: {
    marginBottom: '5px',
    '@media (min-width: 900px)': {
      marginBottom: '0',
      marginRight: '10px',
    },
  },
  input: {
    padding: '5px',
    fontSize: '16px',
    '@media (min-width: 900px)': {
      marginRight: '10px',
    },
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    marginTop: '10px',
    '@media (min-width: 900px)': {
      marginTop: '0',
    },
  },
  margin: {
    marginBottom: '40px',
  },
});

function Login() {
  return (
    <div>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        <div className={css(styles.inputGroup)}>
          <label className={css(styles.label)} htmlFor="email">Email:</label>
          <input className={css(styles.input)} type="email" id="email" name="email" />
        </div>
        <div className={css(styles.inputGroup)}>
          <label className={css(styles.label)} htmlFor="password">Password:</label>
          <input className={css(styles.input)} type="password" id="password" name="password" />
        </div>
        <button className={css(styles.button)} type="submit">OK</button>
      </form>
    </div>
  );
};

export default Login;
