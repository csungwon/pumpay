import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

const UserAvatar = ({ imageUrl, size }) => {
  const style = {
    width: size,
    height: size
  };

  return imageUrl ? (
    <Avatar src={imageUrl} style={style} />
  ) : (
    <Avatar style={style}>
      <PersonIcon />
    </Avatar>
  );
};

UserAvatar.propTypes = {
  imageUrl: PropTypes.string,
  size: PropTypes.number
};

UserAvatar.defaultProps = {
  imageUrl: null,
  size: 47
};

export default UserAvatar;
