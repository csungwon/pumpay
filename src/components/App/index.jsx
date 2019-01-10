import React from 'react';

import FriendInfo from '../FriendInfo';

// const user = {
//   username: 'David Adam Nole',
//   amountOwed: 40.56,
//   amountOwe: 15.34
// };

const friend1 = {
  imageUrl: '',
  username: 'Dave Kwon',
  balance: 30.0
};

const friend2 = {
  imageUrl: '',
  username: 'Armando Fox',
  balance: -39.7
};

const friend3 = {
  imageUrl: '',
  username: 'Yang Liu',
  balance: 67.53
};

const friend4 = {
  imageUrl: '',
  username: 'Zero Boy',
  balance: 0
};

const friend5 = {
  imageUrl: '',
  username: 'Negative Person',
  balance: -999.999
};

const App = () => (
  <div className="App">
    <FriendInfo friend={friend1} />
    <FriendInfo friend={friend2} />
    <FriendInfo friend={friend3} />
    <FriendInfo friend={friend4} />
    <FriendInfo friend={friend5} />
  </div>
);

export default App;
