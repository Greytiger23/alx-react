import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  table: {
    width: '100%',
    border: '1px solid #ddd',
  },
  th: {
    borderBottom: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '10px',
  }
});

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.table)}>
      <thead>
        <tr>
          <th className={css(styles.th)}>Available courses</th>
        </tr>
      </thead>
      <tbody>
        {listCourses.length === 0 && (
          <tr>
            <td className={css(styles.td)}>No courses available yet</td>
          </tr>
        )}
	  {listCourses.map((course) => (
            <tr key={course.id}>
              <td className={css(styles.td)}>{course.name}</td>
            </tr>
          ))}
        )}
      </tbody>
    </table>
  );
}

export default CourseList;
