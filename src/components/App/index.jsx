import React from 'react';

import FriendInfoList from '../FriendInfoList';

const friends = [
  {
    id: 1,
    imageUrl: 'https://github.com/davekwon.png?size=50',
    username: 'Dave Kwon',
    balance: 30.0
  },
  {
    id: 2,
    imageUrl: '',
    username: 'Armando Fox',
    balance: -39.7
  },
  {
    id: 3,
    imageUrl: '',
    username: 'Yang Liu',
    balance: 67.53
  },
  {
    id: 4,
    imageUrl: '',
    username: 'Zero Boy',
    balance: 0
  },
  {
    id: 5,
    imageUrl: '',
    username: 'Negative Person',
    balance: -999.999
  }
];

const App = () => (
  <div className="App">
    <FriendInfoList data={friends} />
  </div>
);

export default App;
