import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '../../../UI/Avatar';
import CurrencyFormatter from '../../../UI/CurrencyFormatter';

const styles = {
  balance: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'bold'
  }
};

const FriendInfo = ({ friend: { imageUrl, username, balance }, classes }) => (
  <ListItem button>
    <ListItemAvatar>
      <Avatar imageUrl={imageUrl} />
    </ListItemAvatar>
    <ListItemText primary={username} primaryTypographyProps={{ noWrap: true }} />
    {balance !== 0 && (
      <div className={classes.balance} style={{ color: balance > 0 ? '#3ebc2e' : '#ff6f00' }}>
        <Typography variant="caption" align="right" color="inherit">
          {balance > 0 ? 'Owed' : 'Owe'}
        </Typography>
        <Typography variant="title" color="inherit">
          <CurrencyFormatter displayType="text" value={Math.abs(balance)} prefix />
        </Typography>
      </div>
    )}
  </ListItem>
);

FriendInfo.propTypes = {
  friend: PropTypes.shape({
    imageUrl: PropTypes.string,
    username: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired
  }).isRequired,
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(FriendInfo);
