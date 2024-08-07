import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<CourseListRow />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    expect(wrapper.find('th').length).toBe(1);
    expect(wrapper.find('th').prop('colSpan')).toBe('2');
  });

  it('renders two cells when textSecondCell is present and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
    expect(wrapper.find('th').length).toBe(2);
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
    expect(wrapper.find('td').length).toBe(2);
  });

  it('renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" textSecondCell="test2" />);
    expect(wrapper.find('tr').children('td')).toHaveLength(2);
  });

  it('applies the correct style for a header row', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('applies the correct style for a regular row', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" textSecondCell="test2" />);
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
});
