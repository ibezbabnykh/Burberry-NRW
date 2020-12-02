import React from 'react';
import PropTypes from 'prop-types';

import './ErrorMessage.scss';

const ErrorMessage = ({ text, className }) => (
    <div className={`error-message ${className}`}>{text}</div>
);

ErrorMessage.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

ErrorMessage.defaultProps = {
    className: '',
};

export default ErrorMessage;