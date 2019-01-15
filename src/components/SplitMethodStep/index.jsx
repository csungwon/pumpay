import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Avatar from '../UI/Avatar';
import CurrencyFormatter from '../UI/CurrencyFormatter';

// default: split evenly (by amount)
// option1: split by percent
// option2: split by ratio

// amountLeft, percentageLeft, ratioLeft

// friends: imageUrl, username, amount

const styles = theme => ({
  button: {
    marginTop: 'auto',
    marginBottom: theme.spacing.unit * 3
  }
});

const SplitMethodStep = ({ friends, totalAmount, handleAmountChange, classes }) => {
  const totalAmountInTextFields = friends.reduce((sum, current) => sum + current.amount, 0);
  const amountLeft = totalAmount - totalAmountInTextFields;
  return (
    <div>
      <List>
        {friends.map((friend, index) => (
          <ListItem key={friend.id}>
            <ListItemAvatar>
              <Avatar imageUrl={friend.imageUrl} />
            </ListItemAvatar>
            <ListItemText primary={friend.username} />
            <TextField
              onChange={handleAmountChange(index)}
              id="filled-bare"
              defaultValue={friend.amount}
              margin="normal"
              variant="filled"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                inputComponent: CurrencyFormatter
              }}
            />
          </ListItem>
        ))}
      </List>

      <div>{`Amount Left: $${amountLeft}`}</div>

      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        // onClick={}
        size="large"
        fullWidth
      >
        Add Bill
      </Button>
    </div>
  );
};

SplitMethodStep.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAmountChange: PropTypes.func.isRequired,
  totalAmount: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(SplitMethodStep);
