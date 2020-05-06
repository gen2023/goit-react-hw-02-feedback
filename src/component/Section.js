import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);
Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
