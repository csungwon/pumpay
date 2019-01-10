import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  defaultSize: {
    width: 47,
    height: 47
  },
  large: {
    width: 60,
    height: 60
  }
};

const UserAvatar = ({ imageUrl, classes, large }) => {
  const className = large ? classes.large : classes.defaultSize;

  return imageUrl ? (
    <Avatar src={imageUrl} className={className} />
  ) : (
    <Avatar className={className}>
      <PersonIcon />
    </Avatar>
  );
};

UserAvatar.propTypes = {
  imageUrl: PropTypes.string,
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  large: PropTypes.bool
};

UserAvatar.defaultProps = {
  imageUrl: null,
  large: false
};

export default withStyles(styles)(UserAvatar);
