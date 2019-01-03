import React from "react";
import PropTypes from "prop-types";

const MemberInfo = ({ displayName, imageURL, amount }) => (
  <div>
    <div>{displayName}</div>
    <div>{<img src={imageURL} />}</div>
    <div>
      {amount > 0
        ? `To Pay ${amount}`
        : amount < 0
        ? `To Receive ${-amount}`
        : ""}
    </div>
  </div>
);

MemberInfo.propTypes = {
  displayName: PropTypes.string.isRequired
};

export default MemberInfo;
