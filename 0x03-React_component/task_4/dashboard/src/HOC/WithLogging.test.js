import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

const TestComponent = () => <div>Test Component</div>;

describe('WithLogging HOC', () => {
  let originalConsoleLog;

  beforeAll(() => {
    originalConsoleLog = console.log;
  });

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  afterAll(() => {
    console.log = originalConsoleLog;
  });

  it('logs component mount and unmount', () => {
    console.log = jest.fn();

    const WrappedComponent = WithLogging(TestComponent);
    const wrapper = mount(<WrappedComponent />);
		      
    expect(console.log).toHaveBeenCalledWith('Component TestComponent is mounted');
		      
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component TestComponent is going to unmount');
		      
    console.log.mockRestore();
  });

  it('logs component mount and unmount for unnamed components', () => {
    console.log = jest.fn();

    const UnnamedComponent = () => <div>Unnamed Component</div>;
    const WrappedUnnamedComponent = WithLogging(UnnamedComponent);
    const wrapper = mount(<WrappedUnnamedComponent />);
		      
    expect(console.log).toHaveBeenCalledWith('Component UnnamedComponent is mounted');
		      
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component UnnamedComponent is going to unmount');
		      
    console.log.mockRestore();
  });
});
