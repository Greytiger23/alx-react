import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext, { defaultUser } from './AppContext';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: this.logOut.bind(this),
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(email, password) {
    this.setState({ 
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: defaultUser,
    });
  }

  render() {
    const { user, logOut } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <div className="App">
        {/* Your components go here */}
          <Header />
          <Notifications />
          {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
