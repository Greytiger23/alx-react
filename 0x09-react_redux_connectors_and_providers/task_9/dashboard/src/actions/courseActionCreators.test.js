import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios fomr 'axios';
import { selectCourse, unSelectCourse, fetchCourses, setCourses } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from './courseActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('courseActionCreators tests', () => {
  it('should create an action to select a course', () => {
    const expectedAction = {
      type: SELECT_COURSE,
      index: 1,
    };
    expect(selectCourse(1)).toEqual(expedtedAction);
  });

  it('should create an action to unselect a course' () => {
    const expectedAction = {
      type: UNSELECT_COURSE,
      index: 1,
    };
    expect(unSelectCourse(1)).toEqual(expectedAction);
  });
});

describe('fetchCourses action creator', () => {
  it('should dispatch setCourses with the data from the API', () => {
    const mockCourses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
    ];

    axios.get.mockResolvedValue({ data: mockCourses });

    const expectedActions = [
      { type: SET_COURSES, payload: mockCourses },
    ];

    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle errors', () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).catch(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});
