import React from 'react';
import PropTypes from 'prop-types';

const GroupSummary = ({
  title, creator, numMembers, updates
}) => (
  <div>
    <div>{title || `${creator} and ${numMembers - 1} more...`}</div>
    <div className="chat-icon">{updates === 0 ? '' : updates}</div>
  </div>
);

GroupSummary.propTypes = {
  title: PropTypes.string,
  creator: PropTypes.string.isRequired,
  numMembers: PropTypes.number.isRequired,
  updates: PropTypes.number.isRequired
};

GroupSummary.defaultProps = {
  title: ''
};

export default GroupSummary;
