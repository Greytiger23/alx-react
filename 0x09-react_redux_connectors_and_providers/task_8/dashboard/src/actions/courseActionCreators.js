import axios from 'axios';
import { bindActionCreators } from 'redux';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { setCourses } from './courseActionCreators';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

export const boundCourseActionCreators = (dispatch) => bindActionCreators({
  selectCourse,
  unSelectCourse,
}, dispatch);

export const setCourses = (courses) => ({
  type: SET_COURSES,
  payload: courses,
});

export const fetchCourses = () => {
  return (dispatch) => {
    return axios.get('/courses.json')
      .then((response) => {
        dispatch(setCourses(response.data));
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  };
};
