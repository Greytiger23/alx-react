import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value, id, markAsRead }) => {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}>
      {value}
    </li>
  );
};

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
