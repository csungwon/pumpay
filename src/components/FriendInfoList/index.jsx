import React from 'react';
import PropTypes from 'prop-types';
import FriendInfo from '../FriendInfo';

const FriendInfoList = ({ data }) => (
  <div>
    {data.map(friend => (
      <FriendInfo key={friend.id} friend={friend} />
    ))}
  </div>
);

FriendInfoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FriendInfoList;
