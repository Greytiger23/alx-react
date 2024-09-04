import { getAllCourses } from './courseSelector';
import { fromJS } from 'immutable';

describe('getAllCourses Selector', () => {
  it('should return a List of all course entities', () => {
    const state = fromJS({
      courses: {
        courses: {
          1: { id: 1, name: 'Course 1' },
          2: { id: 2, name: 'Course 2' },
          3: { id: 3, name: 'Course 3' },
        },
      },
    });

    const expectedResult = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
      { id: 3, name: 'Course 3' },
    ];

    expect(getAllCourses(state)).toEqual(expectedResult);
  });
});
