import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

import FriendInfo from '../FriendInfo';

const FriendInfoList = ({ data }) => (
  <List>
    {data.map(friend => (
      <FriendInfo key={friend.id} friend={friend} />
    ))}
  </List>
);

FriendInfoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FriendInfoList;
