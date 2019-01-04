import React from 'react';
import PropTypes from 'prop-types';

const MemberInfo = ({ displayName, imageURL, amount }) => {
  let amountToShow = null;
  if (amount > 0) {
    amountToShow = `To Pay ${amount}`;
  } else if (amount < 0) {
    amountToShow = `To Receive ${amount}`;
  } else {
    amountToShow = '';
  }

  return (
    <div>
      <div>{displayName}</div>
      <div>{<img src={imageURL} alt="user avatar" />}</div>
      <div>{amountToShow}</div>
    </div>
  );
};

MemberInfo.propTypes = {
  displayName: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};

export default MemberInfo;
