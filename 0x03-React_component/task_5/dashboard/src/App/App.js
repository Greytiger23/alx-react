import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import WithLogging from '../HOC/WithLogging';
import './App.css';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
];

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
    listCourses: PropTypes.arrayOf(PropTypes.object),
    listNotifications: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
    listCourses: [],
    listNotifications: [],
  };

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn, listCourses, listNotifications } = this.props;
    return (
      <>
        <Notifications displayDrawer={false} listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <div className="App-body">
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
	    ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
	    )}
            <BodySection title="News from the School">
              <p>test</p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default WithLogging(App);
