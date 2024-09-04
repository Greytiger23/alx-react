import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';

describe('NotificationsContainer', () => {
  let fetchNotificationsMock;
  let wrapper;

  beforeEach(() => {
    fetchNotificationsMock = jest.fn();
    wrapper = shallow(<NotificationsContainer fetchNotifications={fetchNotificationsMock} notifications={[]} />);
  });

  it('calls fetchNotifications on mount', () => {
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});
