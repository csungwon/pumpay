import React from 'react';
import Dinero from 'dinero.js';

import SplitMethodStep from '../AddBill/SplitMethodStep';

// import AddFriendStep from '../AddFriendStep';

const friends = [
  {
    id: 1,
    username: 'Sungwon Cho',
    imageUrl: 'https://github.com/csungwon.png?size=50'
  },
  {
    id: 2,
    username: 'Dave Kwon',
    imageUrl: 'https://github.com/davekwon.png?size=50'
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

const t = Dinero({ amount: 100000 });
const evenlyDistributedAmount = t.allocate(Array(friends.length).fill(1));
const s = friends.reduce((obj, friend, index) => {
  obj[friend.id] = evenlyDistributedAmount[index]; // eslint-disable-line no-param-reassign
  return obj;
}, {});

class App extends React.Component {
  state = {
    totalAmount: t,
    shares: s,
    method: 0
  };

  handleAmountChange = userId => ({ target: { value } }) => {
    this.setState(prevState => ({
      shares: {
        ...prevState.shares,
        [userId]: Dinero({ amount: parseInt(value * 100, 10) })
      }
    }));
  };

  handleMethodChange = (event, value) => {
    this.setState({ method: value });
  };

  render() {
    const { totalAmount, shares, method } = this.state;
    return (
      <div>
        <SplitMethodStep
          friends={friends}
          totalAmount={totalAmount}
          shares={shares}
          handleAmountChange={this.handleAmountChange}
          method={method}
          handleMethodChange={this.handleMethodChange}
        />
      </div>
    );
  }
}

export default App;
