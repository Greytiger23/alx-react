import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { fetchNotifications } from '../actions/notificationActionCreators';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Notifications Componenet', () => {
  let store;
  let wrapper;
  let mockMarkNotificationAsRead;

  beforEach(() => {
    mockMarkNotificationAsRead = jest.fn();
    store = mockStore({
      notifications: fromJS({
        notifications: [
          { id: 1, type: 'default', message: 'New notification'},
          { id: 2, type: 'urgent', message: 'Urgent notification'},
        ],
        loading: false,
      }),
    });

    wrapper = shallow(
      <Provider store={store}>
        <Notifications fetchNotifications={() => {}} markNotificationAsRead={mockMarkNotificationAsRead} />
      </Provider>
    ).dive().dive();
  });

  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('should not re-render if the new listNotifications has fewer or equal items', () => {
    const initialProps = {
      displayDrawer: true,
      listNotifications: [{ id: 1, type: 'default', value: 'test' }]
    };
    const wrapper = shallow(<Notifications {...initialProps} />);
    const shouldUpdateSpy = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
	      
    const newProps = {
      displayDrawer: true,
      listNotifications: [{ id: 1, type: 'default', value: 'test' }]
    };
    wrapper.setProps(newProps);
	      
    expect(shouldUpdateSpy).toHaveBeenCalled();
    expect(wrapper.instance().shouldComponentUpdate(newProps)).toBe(false);
  });

  it('should re-render if the new listNotifications has more items', () => {
    const initialProps = {
      displayDrawer: true,
      listNotifications: [{ id: 1, type: 'default', value: 'test' }]
    };
    const wrapper = shallow(<Notifications {...initialProps} />);
    const shouldUpdateSpy = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
		      
    const newProps = {
      displayDrawer: true,
      listNotifications: [
        { id: 1, type: 'default', value: 'test' },
        { id: 2, type: 'urgent', value: 'urgent test' }
      ]
    };
    wrapper.setProps(newProps);
		      
    expect(shouldUpdateSpy).toHaveBeenCalled();
    expect(wrapper.instance().shouldComponentUpdate(newProps)).toBe(true);
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

  it('verifies that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find('div').at(0).simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('verifies that clicking on the close button calls handleHideDrawer', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('button').simulate('click');
    expect(handledHideDrawer).toHaveBeenCalled();
  });

  it('calls markNotificationAsRead when a notification is clicked', () => {
    const markNotificationAsReadMock = jest.fn();
    const listNotifications = [
      { id: 1, value: 'Notification 1' },
      { id: 2, value: 'Notification 2' },
    ];

    const wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsReadMock}
      />
    );

    wrapper.find('button').at(0).simulate('click');
    expect(markNotificationAsReadMock).toHaveBeenCalledWith(1);
  });

  it('should fetch notifications on mount', () => {
    expect(wrapper.instance().props.fetchNotifications).toHaveBeenCalled();
  });

  it('should call markNotificationAsRead when a notification is marked as read', () => {
    const notificationId = 1;
    wrapper.find('button').first().simulate('click');
    expect(mockMarkNotificationAsRead).toHaveBeenCalledWith(notificationId);
  });

  it('should render the notifications correctly', () => {
    expect(wrapper.find('li').length).toBe(2);
  });
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
