import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div>
    {title}
    {children}
  </div>
);
Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
