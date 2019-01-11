import React from 'react';
import PropTypes from 'prop-types';

import UserBadge from '../UserBadge';
import styles from './style.module.css';

const SelectedUsers = ({ friends, onUserDelete }) => (
  <div className={styles.Container}>
    {friends.map(friend => (
      <UserBadge user={friend} onUserDelete={onUserDelete} key={friend.id} />
    ))}
  </div>
);

SelectedUsers.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUserDelete: PropTypes.func.isRequired
};

export default SelectedUsers;
