import React from 'react';
import PropTypes from 'prop-types';

const GroupSummary = ({ title, creator, numMembers }) => (
  <div>{title || `${creator} and ${numMembers - 1} more...`}</div>
);

GroupSummary.propTypes = {
  title: PropTypes.string,
  creator: PropTypes.string.isRequired,
  numMembers: PropTypes.number.isRequired
};

GroupSummary.defaultProps = {
  title: ''
};

export default GroupSummary;
