import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';

import CurrencyFormatter from '../../UI/CurrencyFormatter';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing.unit
  },
  textField: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  button: {
    marginTop: 'auto',
    marginBottom: theme.spacing.unit * 3
  }
});

const BillDescriptionStep = ({
  amount,
  description,
  onAmountChange,
  onDescriptionChange,
  onNextButton,
  classes
}) => (
  <div className={classes.container}>
    <TextField
      className={classes.textField}
      label="Amount"
      variant="outlined"
      placeholder="How much did you pay in total?"
      onChange={onAmountChange}
      value={amount}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
        inputComponent: CurrencyFormatter
      }}
      fullWidth
      required
    />
    <TextField
      className={classes.textField}
      label="Description"
      variant="outlined"
      placeholder="What's it for?"
      onChange={onDescriptionChange}
      value={description}
      rows={4}
      rowsMax={20}
      multiline
      fullWidth
    />

    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      onClick={onNextButton}
      size="large"
      fullWidth
    >
      Next: Add Friends
    </Button>
  </div>
);

BillDescriptionStep.propTypes = {
  amount: PropTypes.number,
  description: PropTypes.string.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onNextButton: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

BillDescriptionStep.defaultProps = {
  amount: ''
};

export default withStyles(styles)(BillDescriptionStep);
