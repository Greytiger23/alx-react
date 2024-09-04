import React, { Component } from 'react';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="Login">
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={this.handleChangeEmail} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={this.handleChangePassword} />

          <input type="submit" value="Submit" disabled={email === '' || password === ''} />
        </form>
      </div>
    );
  }
}

export default Login;
