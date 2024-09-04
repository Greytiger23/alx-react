import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mapStateToProps } from './App';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

const mockStore = configureStore([]);

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('does not display CourseList when not logged in', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it('verifies that the default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('verifies that the logIn function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    expect(wrapper.state().user.isLoggedIn).toBe(true);
    expect(wrapper.state().user.email).toBe('test@example.com');
  });

  it('verifies that the logOut function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    wrapper.instance().logOut();
    expect(wrapper.state().user.isLoggedIn).toBe(false);
    expect(wrapper.state().user.email).toBe('');
  });

  it('verifies that markNotificationAsRead works as intended', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      listNotifications: [
        { id: 1, value: 'Notification 1' },
        { id: 2, value: 'Notification 2' },
        { id: 3, value: 'Notification 3' },
      ],
    });

    wrapper.instance().markNotificationAsRead(2);
    expect(wrapper.state().listNotifications).toEqual([
      { id: 1, value: 'Notification 1' },
      { id: 3, value: 'Notification 3' },
    ]);
  });
});

describe('mapStateToProps', () => {
  it('should return the correct props from state', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true;
      }
    });

    const expectedProps = {
      isLoggedin: true;
    };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

describe('App Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      ui: {
        isLoggedIn: false,
	isNotificationDrawerVisible: false,
      },
    });
  });

  it('should render without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={false} login={() => {}} logout={() => {}} />);
    expect(wrapper.exists()).tobe(true);
  });

  it('should not display the notification drawer when isNotificationDrawerVisible is false', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive().dive();

    expect(wrapper.find('.notification-drawer').length).toBe(0);
  });

  it('should display the notification drawer when isNotificationDrawerVisible is true', () => {
    store = mockStore({
      ui: {
        isLoggedIn: true,
        isNotificationDrawerVisible: true,
      },
    });

    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive().dive();

    expect(wrapper.find('.notification-drawer').length).toBe(1);
  });

  it('should display "Please log in" when the user is not logged in', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive().dive();

    expect(wrapper.find('h1').text()).toBe('Please log in');
  });

  it('should display "Welcome back!" when the user is logged in', () => {
    store = mockStore({
      ui: {
        isLoggedIn: true,
        isNotificationDrawerVisible: false,
      },
    });

    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive().dive();

    expect(wrapper.find('h1').text()).toBe('Welcome back!');
  });
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
