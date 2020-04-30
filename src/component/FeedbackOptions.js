import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(
    options.map(type => (
      <button key={type} type="button" onClick={() => onLeaveFeedback(type)}>
        {type}
      </button>
    )),
  );
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
  options: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.number.isRequired,
};

export default FeedbackOptions;
