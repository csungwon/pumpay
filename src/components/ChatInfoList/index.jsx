import React from 'react';
import PropTypes from 'prop-types';
import ChatInfo from '../ChatInfo';

const ChatInfoList = ({ data }) => (
  <div>
    {data.map(chat => (
      <ChatInfo key={chat.id} user={chat.user} lastChat={chat.lastChat} />
    ))}
  </div>
);

ChatInfoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ChatInfoList;
