import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import Avatar from '../../../UI/Avatar';

const UserInfo = ({
  user: {
    imageUrl, username, amountOwe, amountOwed
  }
}) => (
  <div className={styles.Container}>
    <div className={styles.Row}>
      <div className={styles.AvatarContainer}>
        <Avatar imageUrl={imageUrl} size={80} />
        <span className={styles.Username}>{username}</span>
      </div>
    </div>
    <div className={styles.Row}>
      <div className={`${styles.Column} ${styles.owed}`}>
        <span className={styles.small}>owed</span>
        <span className={styles.amount}>{`$${amountOwed}`}</span>
      </div>
      <div className={`${styles.Column} ${styles.owe}`}>
        <span className={styles.small}>owe</span>
        <span className={styles.amount}>{`$${amountOwe}`}</span>
      </div>
    </div>
  </div>
);

UserInfo.propTypes = {
  user: PropTypes.shape({
    imageUrl: PropTypes.string,
    username: PropTypes.string.isRequired,
    amountOwe: PropTypes.number.isRequired,
    amountOwed: PropTypes.number.isRequired
  }).isRequired
};

export default UserInfo;
