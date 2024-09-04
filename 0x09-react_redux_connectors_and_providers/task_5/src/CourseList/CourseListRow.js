import React, { useState } from 'react';
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
  const [isChecked, setIsChecked] = useState(false);

  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;

  const rowChecked = {
    backgroundColor: '#e6e4e4',
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr style={isChecked ? rowChecked : {}}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>
            <input type="checkbox" onChange={handleCheckboxChange} />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
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
