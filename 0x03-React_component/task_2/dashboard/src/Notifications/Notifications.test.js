import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
    let wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(0);
    expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');

    wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find(NotificationItem).length).toBe(0);
    expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');
  });

  it('renders the correct number of NotificationItem when passing a list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('does not display "Here is the list of notifications" when listNotifications is empty', () => {
   const wrapper = shallow(<Notifications listNotifications={[]} displayDrawer={true} />);
    expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');
  });

  it('calls markAsRead with the correct ID', () => {
    console.log = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[{ id: 1, type: 'default', value: 'New course available' }]} />);
    const instance = wrapper.instance();
    instance.markAsRead(1);
    expect(console.log).toHaveBeenCalledWith('Notification 1 has been marked as read');
    console.log.mockRestore();
  });
});
