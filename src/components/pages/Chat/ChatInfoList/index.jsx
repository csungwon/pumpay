import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

import ChatInfo from '../ChatInfo';

const ChatInfoList = ({ data }) => (
  <List>
    {data.map(chat => (
      <ChatInfo key={chat.id} user={chat.user} lastChat={chat.lastChat} />
    ))}
  </List>
);

ChatInfoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ChatInfoList;
