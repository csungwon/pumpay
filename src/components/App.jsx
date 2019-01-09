import React from 'react';

import FriendInfo from './FriendInfo';

const user = {
  username: 'Sean Cho'
};

const lastChat = {
  message: 'Sean added "Feb 2019 Rent"',
  createdAt: '2019-01-23'
};

const App = () => (
  <div className="App">
    <FriendInfo user={user} lastChat={lastChat} />
  </div>
);

export default App;
