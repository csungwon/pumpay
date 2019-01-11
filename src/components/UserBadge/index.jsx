import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import Clear from '@material-ui/icons/Clear';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '../UI/Avatar';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20
  },
  badge: {
    top: 1,
    right: -10,
    backgroundColor: 'gray'
  },
  username: {
    width: 40,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};

const UserBadge = ({ user, onUserDelete, classes }) => (
  <div onClick={onUserDelete} className={classes.container}>
    <Badge badgeContent={<Clear />} color="primary" classes={{ badge: classes.badge }}>
      <Avatar size={40} imageUrl={user.imageUrl} />
    </Badge>
    <div className={classes.username}>{user.username}</div>
  </div>
);

UserBadge.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string
  }).isRequired,
  onUserDelete: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired // eslint-disable-line
};

export default withStyles(styles)(UserBadge);
