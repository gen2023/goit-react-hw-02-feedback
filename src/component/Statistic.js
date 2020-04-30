import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="statistic">
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
    <span>Total: {total}</span>
    <span>PositiveFeedback: {positivePercentage}%</span>
  </div>
);

Statistic.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  countPositive: PropTypes.number.isRequired,
};

export default Statistic;
