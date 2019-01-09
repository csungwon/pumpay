import React from 'react';

import ChatInfoList from './ChatInfoList';

const data = [
  {
    id: 1,
    user: {
      imageUrl: '',
      username: 'Sean Cho'
    },
    lastChat: {
      message: 'hello',
      createdAt: '2019-01-01'
    }
  },
  {
    id: 2,
    user: {
      imageUrl: '',
      username: 'Dave Kwon'
    },
    lastChat: {
      message: 'helloooooo',
      createdAt: '2019-01-02'
    }
  }
];

const App = () => (
  <div className="App">
    <ChatInfoList data={data} />
  </div>
);

export default App;
