import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  th: {
    fontWeight: 'bold',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
    padding: '10px',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '10px',
  },
});

function CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;
  return (
    <tr className={css(rowStyle)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={css(styles.th)}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.td)}>{textFirstCell}</td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
