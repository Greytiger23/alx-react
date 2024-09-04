import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  margin: {
    marginBottom: '40px',
  }
});

function BodySectionWithMarginBottom({ children }) {
  return (
    <div className={css(styles.margin)}>
      {children}
    </div>
  );
}

export default BodySectionWithMarginBottom;
