import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../UI/Avatar';
import styles from './style.module.css';

const ChatInfo = ({ user: { imageUrl, username }, lastChat: { message, createdAt } }) => (
  <div className={styles.Container}>
    <div className={styles.AvatarContainer}>
      <Avatar imageUrl={imageUrl} />
    </div>
    <div className={styles.Column}>
      <span className={styles.Name}>{username}</span>
      <span className={styles.Message}>{message}</span>
    </div>
    <div>
      <span className={styles.Date}>{createdAt}</span>
    </div>
  </div>
);

ChatInfo.propTypes = {
  user: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired,
  lastChat: PropTypes.shape({
    message: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired
};

export default ChatInfo;
