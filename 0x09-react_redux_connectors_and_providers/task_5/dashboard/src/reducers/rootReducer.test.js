import { Map } from 'immutable';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      courses: Map(),
      notifications: Map(),
      ui: Map({
        isLoggedIn: false,
        isNotificationDrawerVisible: false,
        user: null,
      }),
    };

    const state = rootReducer(undefined, { type: '@@INIT' });

    expect(state.toJS()).toEqual(initialState);
  });
});
