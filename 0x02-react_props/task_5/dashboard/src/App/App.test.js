import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
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
  });
});
