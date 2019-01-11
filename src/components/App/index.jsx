import React from 'react';

import SelectedUsers from '../SelectedUsers';

const friends = [
  {
    id: 1,
    username: 'Sungwon Cho'
  },
  {
    id: 2,
    username: 'Dave Kwon'
  },
  {
    id: 3,
    username: 'user3'
  },
  {
    id: 4,
    username: 'user4'
  },
  {
    id: 5,
    username: 'user5'
  },
  {
    id: 6,
    username: 'user6'
  }
];

const App = () => (
  <div>
    <SelectedUsers
      friends={friends}
      onUserDelete={() => {
        console.log('delete');
      }}
    />
  </div>
);

export default App;
