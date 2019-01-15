import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import Clear from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '../../../UI/Avatar';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 1.5
  },
  badge: {
    top: 1,
    right: -10,
    backgroundColor: 'gray',
    width: theme.typography.fontSize,
    height: theme.typography.fontSize
  },
  clearIcon: {
    fontSize: theme.typography.fontSize
  },
  username: {
    width: 40,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 12,
    textAlign: 'center'
  },
  badgeIcon: {
    padding: theme.spacing.unit / 2
  }
});

const UserBadge = ({ user, onUserDelete, classes }) => (
  <div className={classes.container}>
    <IconButton onClick={onUserDelete(user.id)} classes={{ root: classes.badgeIcon }} disableRipple>
      <Badge
        badgeContent={<Clear className={classes.clearIcon} />}
        color="primary"
        classes={{ badge: classes.badge }}
      >
        <Avatar size={40} imageUrl={user.imageUrl} />
      </Badge>
    </IconButton>
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
