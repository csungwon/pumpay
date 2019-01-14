import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '../UI/Avatar';

const styles = theme => ({
  typography: {
    color: theme.palette.text.hint,
    alignSelf: 'flex-start'
  }
});

const ChatInfo = ({ user: { imageUrl, username }, lastChat: { message, createdAt }, classes }) => (
  <ListItem button>
    <ListItemAvatar>
      <Avatar imageUrl={imageUrl} />
    </ListItemAvatar>
    <ListItemText
      primary={username}
      secondary={message}
      primaryTypographyProps={{ noWrap: true }}
    />
    <Typography variant="caption" classes={{ caption: classes.typography }}>
      {createdAt}
    </Typography>
  </ListItem>
);

ChatInfo.propTypes = {
  user: PropTypes.shape({
    imageUrl: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  lastChat: PropTypes.shape({
    message: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired,
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(ChatInfo);
