import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCourses, selectCourse, unselectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';
import CourseListrow from './CourseListRow';

class CourseList extends Component {
  static propTypes = {
    fetchCourses: PropTypes.func.isRequired,
    selectCourse: PropTypes.func.isRequired,
    unSelectCourse: PropTypes.func.isRequired,
    courses: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow = (id, checked) => {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  };

  render() {
    const { courses } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Course list</th>
          </tr>
        </thead>
        <tbody>
          {courses.valueSeq().map(course => (
            <CourseListRow
              key={course.get('id')}
              id={course.get('id')}
              isChecked={course.get('isSelected')}
              onChangeRow={this.onChangeRow}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: getListCourses(state),
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
