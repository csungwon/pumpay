import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '../UI/Avatar';

const styles = {
  root: {
    flexGrow: 1,
    overflowY: 'auto'
  }
};

const SelectUserList = ({
  friends, onSelect, selectedFriends, classes
}) => (
  <List classes={{ root: classes.root }}>
    {friends.map(({ id, imageUrl, username }) => (
      <ListItem key={id} component="label" htmlFor={id} button>
        <ListItemAvatar>
          <Avatar imageUrl={imageUrl} />
        </ListItemAvatar>
        <ListItemText primary={username} primaryTypographyProps={{ noWrap: true }} />
        <ListItemSecondaryAction>
          <Checkbox onChange={onSelect(id)} checked={selectedFriends.has(id)} inputProps={{ id }} />
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

SelectUserList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedFriends: PropTypes.object.isRequired, // eslint-disable-line
  classes: PropTypes.object.isRequired // eslint-disable-line
};

export default withStyles(styles)(SelectUserList);
