import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { CourseList } from './CourseList';
import CourseListRow from './CourseListRow';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

describe('<CourseList />', () => {
  let wrapper;
  const mockFetchCourses = jest.fn();
  const mockSelectCourse = jest.fn();
  const mockUnSelectCourse = jest.fn();
  const mockCourses = {
    valueSeq: jest.fn().mockReturnValue([
      { get: jest.fn().mockReturnValue('1') },
      { get: jest.fn().mockReturnValue('2') },
    ]),
  };

  beforeEach(() => {
    wrapper = shallow(
      <CourseList
        fetchCourses={mockFetchCourses}
        selectCourse={mockSelectCourse}
        unSelectCourse={mockUnSelectCourse}
        courses={mockCourses}
      />
    );
  });

  it('should call fetchCourses on mount', () => {
    expect(mockFetchCourses).toHaveBeenCalled();
  });

  it('should call selectCourse when onChangeRow is called with checked true', () => {
    const instance = wrapper.instance();
    instance.onChangeRow('1', true);
    expect(mockSelectCourse).toHaveBeenCalledWith('1');
  });

  it('should call unSelectCourse when onChangeRow is called with checked false', () => {
    const instance = wrapper.instance();
    instance.onChangeRow('2', false);
    expect(mockUnSelectCourse).toHaveBeenCalledWith('2');
  });

  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders correctly if you pass an empty array or if you don’t pass the listCourses property', () => {
    let wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow').length).toBe(3);
    expect(wrapper.find('CourseListRow').at(2).prop('textFirstCell')).toEqual('No course available yet');

    wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find('CourseListRow').length).toBe(3);
    expect(wrapper.find('CourseListRow').at(2).prop('textFirstCell')).toEqual('No course available yet');
  });

  it('renders the correct number of rows when passing a list', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find('CourseListRow').length).toBe(5);
  });
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
