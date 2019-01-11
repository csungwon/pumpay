import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const CurrencyFormatter = ({
  inputRef, onChange, displayType, ...other
}) => (
  <NumberFormat
    {...other}
    getInputRef={inputRef}
    onValueChange={({ value }) => {
      onChange({ target: { value } });
    }}
    decimalScale={2}
    allowNegative={false}
    displayType={displayType}
    fixedDecimalScale
    thousandSeparator
  />
);

CurrencyFormatter.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  displayType: PropTypes.string
};

CurrencyFormatter.defaultProps = {
  displayType: 'input'
};

export default CurrencyFormatter;
