import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSEECT_COURSE } from './courseActionTypes';

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
