import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} logout={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an img and an h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('does not display logout section when user is not logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('displays logout section when user is logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com (logout)');
  });

  it('calls logOut function when clicking on logout', () => {
    const logOut = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut }}>
         <Header />
       </AppContext.Provider>
     );
     wrapper.find('#logoutSection a').simulate('click');
     expect(logOut).toHaveBeenCalled();
  });
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
