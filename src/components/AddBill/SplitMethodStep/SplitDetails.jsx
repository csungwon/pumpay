import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import CurrencyFormatter from '../../UI/CurrencyFormatter';
import Avatar from '../../UI/Avatar';

const SplitDetails = ({ users, shares, handleInputChange }) => (
  <List>
    {users.map((user, index) => (
      <ListItem key={user.id}>
        <ListItemAvatar>
          <Avatar imageUrl={user.imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={user.username}
          primaryTypographyProps={{ noWrap: true }}
          secondary={shares[index].toFormat('$0,0.00')}
        />
        <TextField
          onChange={handleInputChange(index)}
          value={shares[index].toUnit()}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            inputComponent: CurrencyFormatter,
            inputProps: {
              style: {
                textAlign: 'right'
              },
              size: 10
            }
          }}
        />
      </ListItem>
    ))}
  </List>
);

SplitDetails.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  shares: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default SplitDetails;
