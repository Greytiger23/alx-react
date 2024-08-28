import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext, { defaultUser } from './AppContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
      listNotifications: [
        { id: 1, value: 'Notification 1' },
        { id: 2, value: 'Notification 2' },
        { id: 3, value: 'Notification 3' },
      ],
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
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

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter((notification) => notification.id !== id),
    });
  }

  render() {
    const { user, logOut, listNotifications } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <div className="App">
          <Header />
          <Notifications
            listNotifications={listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
