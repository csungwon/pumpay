import React from 'react';

import UserInfo from '../UserInfo';

const user = {
  username: 'David Adam Nole',
  amountOwed: 40.56,
  amountOwe: 15.34
};

const App = () => (
  <div className="App">
    <UserInfo user={user} />
  </div>
);

export default App;
