import React from 'react';
import PropTypes from 'prop-types';

import MemberInfo from './MemberInfo';

const MemberInfoList = ({ members }) => (
  <div>
    <ul>
      {members.map(memberInfo => (
        <MemberInfo key={memberInfo.displayName} {...memberInfo} />
      ))}
    </ul>
  </div>
);

MemberInfoList.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default MemberInfoList;
