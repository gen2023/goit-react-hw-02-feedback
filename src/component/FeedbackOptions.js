import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(type => (
        <button key={type} type="button" onClick={() => onLeaveFeedback(type)}>
          {type}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
