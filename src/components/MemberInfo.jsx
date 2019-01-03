import React from 'react';
import PropTypes from 'prop-types';

const MemberInfo = ({ displayName }) => <div>{displayName}</div>;

MemberInfo.propTypes = {
  displayName: PropTypes.string.isRequired
};

export default MemberInfo;
