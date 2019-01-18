import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Percent from 'mdi-material-ui/Percent';
import Poll from 'mdi-material-ui/Poll';
import PropTypes from 'prop-types';

const SelectMethod = ({ method, handleMethodChange }) => (
  <Paper>
    <Tabs
      value={method}
      onChange={handleMethodChange}
      variant="fullWidth"
      indicatorColor="primary"
      textColor="primary"
    >
      <Tab icon={<AttachMoney />} label="BY AMOUNT" value="amount" />
      <Tab icon={<Percent />} label="BY PERCENT" value="percent" />
      <Tab icon={<Poll />} label="BY RATIO" value="ratio" />
    </Tabs>
  </Paper>
);

SelectMethod.propTypes = {
  method: PropTypes.oneOf(['amount', 'percent', 'ratio']).isRequired,
  handleMethodChange: PropTypes.func.isRequired
};

export default SelectMethod;
