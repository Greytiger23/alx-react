import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders with correct type and value', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
    expect(wrapper.find('li').text()).toBe('test');
  });

  it('renders with correct html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.find('li').html()).toContain('<u>test</u>');
  });

  it('calls markAsRead when clicked', () => {
    const markAsReadMock = jest.fn();
    const wrapper = shallow(<NotificationItem id={1} type="default" value="test" markAsRead={markAsReadMock} />);
    wrapper.find('li').simulate('click');
    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });
});
