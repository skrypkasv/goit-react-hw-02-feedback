import React from 'react';
import PropTypes from 'prop-types';

export default function Notification({ message = 'No data' }) {
  return <div>{message}</div>;
}

Notification.propTypes = {
  title: PropTypes.string,
};
