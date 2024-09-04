import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import AppContex from '../App/AppContext';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it('does not display the Contact us link when the user is logged out', () => {
    const contextValue = { user: { isLoggedIn: false } };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(false);
  });

  it('displays the Contact us link when the user is logged in', () => {
    const contextValue = { user: { isLoggedIn: true } };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').text()).toBe('Contact us');
  });
});
