import React, { Component } from 'react';
import Proptypes from 'prop-typesx;
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import './App.css';

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
  };

  static defaultProps = {
    isLoggedIn: false,
  };

  render() {
    return (
      <>
        <Notifications displayDrawer={false} />
        <div className="App">
          <Header />
          {this.props.isLoggedIn ? <CourseList /> <Login />}
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
