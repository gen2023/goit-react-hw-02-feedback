import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => <div>{message}</div>;
Notification.prototype = {
  message: PropTypes.string.isRequired,
};

export default Notification;
