import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import Avatar from '../UI/Avatar';

const FriendInfo = ({ friend: { imageUrl, username, balance } }) => (
  <div className={styles.Container}>
    <div className={styles.Avatar}>
      <Avatar imageUrl={imageUrl} />
    </div>
    <div className={styles.username}>{username}</div>
    {balance !== 0 && (
      <div className={[styles.balance, balance > 0 ? styles.owed : styles.owe].join(' ')}>
        <span className={styles.sign}>{balance > 0 ? 'owed' : 'owe'}</span>
        <span className={styles.amount}>{`$${Math.abs(balance).toFixed(2)}`}</span>
      </div>
    )}
  </div>
);

FriendInfo.propTypes = {
  friend: PropTypes.shape({
    imageUrl: PropTypes.string,
    username: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired
  }).isRequired
};

export default FriendInfo;
