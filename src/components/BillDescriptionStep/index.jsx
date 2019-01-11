import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const BillDescriptionStep = ({
  amount,
  description,
  onAmountChange,
  onDescriptionChange,
  onNextButton
}) => (
  <div>
    <TextField
      label="Amount"
      variant="outlined"
      placeholder="How much did you pay in total?"
      onChange={onAmountChange}
      value={amount}
      fullWidth
    />
    <TextField
      label="Description"
      variant="outlined"
      placeholder="What's it for?"
      onChange={onDescriptionChange}
      value={description}
      fullWidth
    />

    <Button variant="contained" color="primary" onClick={onNextButton} fullWidth>
      Next: Add Friends
    </Button>
  </div>
);

BillDescriptionStep.propTypes = {
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onNextButton: PropTypes.func.isRequired
};

export default BillDescriptionStep;
