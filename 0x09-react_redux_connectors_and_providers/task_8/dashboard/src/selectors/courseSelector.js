import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const cousreSelector = (state) => state.courses.get('courses');

export const getAllCourses = CreateSelector(
  [coursesSelector],
  (courses) => courses.valueSeq().toArray()
);
