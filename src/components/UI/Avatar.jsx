import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  defaultSize: {
    width: 47,
    height: 47
  }
};

const UserAvatar = ({ imageUrl, classes }) => (imageUrl ? (
  <Avatar src={imageUrl} className={classes.defaultSize} />
) : (
  <Avatar className={classes.defaultSize}>
    <PersonIcon />
  </Avatar>
));

UserAvatar.propTypes = {
  imageUrl: PropTypes.string,
  classes: PropTypes.object.isRequired
};

UserAvatar.defaultProps = {
  imageUrl: null
};

export default withStyles(styles)(UserAvatar);
