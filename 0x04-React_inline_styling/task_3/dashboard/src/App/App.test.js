import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

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

  describe('when logged in', () => {
    it('does not include the Login component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login).length).toBe(0);
    });

    it('includes the CourseList component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList).length).toBe(1);
    });

  describe('logOut functionality', () => {
    it('calls logOut and displays alert when ctrl+h is presses', () => {
      const logOutMock = jest.fn();
      const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
      const wrapper = mount(<App logout={logOutMock} />);
      const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
      document.dispatchEvent(event);
      expect(alertMock).toHaveBeenCalledWith('Logging you out');
      expect(logOutMock).toHaveBeenCalled();
      alertMock.mockRestore();
    });
  });
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
