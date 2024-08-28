import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  item: {
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
  },
  defaultItem: {
    color: 'blue',
  },
  urgentItem: {
    color: 'red',
  },
});

function NotificationItem({ type, html, value, id, markAsRead }) {
  const style = type === 'urgent' ? styles.urgentItem : styles.defaultItem;

  return (
    <li className={css(styles.item, style)} data-notification-type={type}
      {html ? (
        <div dangerouslySetInnerHTML={{__html: html }} />
      ) : (
        value
      )}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},
};

export default NotificationItem;
