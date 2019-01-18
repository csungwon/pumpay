import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import SelectMethod from './SelectMethod';
import SplitDetails from './SplitDetails';

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
      <SelectMethod method={method} handleMethodChange={handleMethodChange} />
      <SplitDetails handleInputChange={handleInputChange} users={users} shares={shares} />
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
