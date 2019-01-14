import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const CurrencyFormatter = ({
  inputRef, onChange, displayType, prefix, ...other
}) => (
  <NumberFormat
    {...other}
    getInputRef={inputRef}
    onValueChange={({ value }) => {
      onChange({ target: { value } });
    }}
    prefix={prefix ? '$' : ''}
    decimalScale={2}
    allowNegative={false}
    displayType={displayType}
    fixedDecimalScale
    thousandSeparator
  />
);

CurrencyFormatter.propTypes = {
  inputRef: PropTypes.func,
  onChange: PropTypes.func,
  displayType: PropTypes.string,
  prefix: PropTypes.bool
};

CurrencyFormatter.defaultProps = {
  displayType: 'input',
  inputRef: null,
  onChange: null,
  prefix: false
};

export default CurrencyFormatter;
