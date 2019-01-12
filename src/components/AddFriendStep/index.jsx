import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import SelectedUsers from '../SelectedUsers';
import SelectedUserList from '../SelectUserList';
import SearchBar from '../UI/SearchBar';

const AddFriendStep = ({
  selectedUsers,
  handleRemoveUser,
  handleSearch,
  friends,
  selectedUserIds,
  handleCheckboxToggle,
  onNextButton
}) => (
  <div>
    <SelectedUsers friends={selectedUsers} onUserDelete={handleRemoveUser} />
    <SearchBar onChange={handleSearch} />
    <SelectedUserList
      friends={friends}
      selectedFriends={selectedUserIds}
      onSelect={handleCheckboxToggle}
    />
    <Button
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

AddFriendStep.propTypes = {
  selectedUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemoveUser: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedUserIds: PropTypes.object.isRequired, // eslint-disable-line
  handleCheckboxToggle: PropTypes.func.isRequired,
  onNextButton: PropTypes.func.isRequired
};

export default AddFriendStep;
