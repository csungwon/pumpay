import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Percent from 'mdi-material-ui/Percent';
import Poll from 'mdi-material-ui/Poll';

import Avatar from '../../UI/Avatar';
import CurrencyFormatter from '../../UI/CurrencyFormatter';

const styles = theme => ({
  button: {
    marginTop: 'auto',
    marginBottom: theme.spacing.unit * 3
  },
  amountLeft: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`
  }
});

const SplitMethodStep = ({
  friends,
  totalAmount,
  handleAmountChange,
  shares,
  classes,
  method,
  handleMethodChange
}) => {
  const totalAmountInTextFields = Object.values(shares).reduce((sum, current) => sum.add(current));
  const amountLeft = totalAmount.subtract(totalAmountInTextFields);
  return (
    <div>
      <Paper>
        <Tabs
          value={method}
          onChange={handleMethodChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab icon={<AttachMoney />} label="BY AMOUNT" />
          <Tab icon={<Percent />} label="BY PERCENT" />
          <Tab icon={<Poll />} label="BY RATIO" />
        </Tabs>
      </Paper>
      <List>
        {friends.map(friend => (
          <ListItem key={friend.id}>
            <ListItemAvatar>
              <Avatar imageUrl={friend.imageUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={friend.username}
              primaryTypographyProps={{ noWrap: true }}
              secondary={shares[friend.id].toFormat('$0,0.00')}
            />
            <TextField
              onChange={handleAmountChange(friend.id)}
              value={shares[friend.id].toUnit()}
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

      <Divider variant="middle" />
      <Typography
        align="right"
        variant="title"
        color={amountLeft.isZero() ? 'primary' : 'error'}
        className={classes.amountLeft}
      >
        {`Amount Left: ${amountLeft.toFormat('$0,0.00')}`}
      </Typography>

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
  method: PropTypes.oneOf([0, 1, 2]).isRequired,
  handleMethodChange: PropTypes.func.isRequired,
  totalAmount: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  shares: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(SplitMethodStep);
