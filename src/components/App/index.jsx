import React from 'react';
import SplitMethodStep from '../SplitMethodStep';

// import AddFriendStep from '../AddFriendStep';

const friends = [
  {
    id: 1,
    username: 'Sungwon Cho',
    imageUrl: 'https://github.com/csungwon.png?size=50',
    amount: 12.34
  },
  {
    id: 2,
    username: 'Dave Kwon',
    imageUrl: 'https://github.com/davekwon.png?size=50',
    amount: 33.39
  },
  {
    id: 3,
    username: 'user3',
    amount: 32.32
  },
  {
    id: 4,
    username: 'user4',
    amount: 90.98
  },
  {
    id: 5,
    username: 'user5',
    amount: 33.21
  },
  {
    id: 6,
    username: 'user6',
    amount: 90.12
  }
];

// class App extends React.Component {
//   state = {
//     selectedUserIds: new Set(),
//     searchKey: ''
//   };

//   handleCheckboxToggle = userId => (_, checked) => {
//     this.setState(prevState => {
//       const newSet = new Set(prevState.selectedUserIds);
//       if (checked) {
//         newSet.add(userId);
//       } else {
//         newSet.delete(userId);
//       }
//       return {
//         selectedUserIds: newSet
//       };
//     });
//   };

//   handleRemoveUser = userId => () => {
//     this.setState(prevState => {
//       const newSet = new Set(prevState.selectedUserIds);
//       newSet.delete(userId);

//       return {
//         selectedUserIds: newSet
//       };
//     });
//   };

//   handleSearch = e => {
//     this.setState({ searchKey: e.target.value });
//   };

//   render() {
//     const { selectedUserIds, searchKey } = this.state;
//     const data = friends
//       .filter(friend => new RegExp(searchKey, 'i').test(friend.username))
//       .sort((friend1, friend2) => {
//         if (friend1.username < friend2.username) return -1;
//         if (friend1.username > friend2.username) return 1;
//         return 0;
//       });
//     const selectedUsers = friends.filter(friend => selectedUserIds.has(friend.id));
//     return (
//       <AddFriendStep
//         selectedUsers={selectedUsers}
//         handleRemoveUser={this.handleRemoveUser}
//         handleSearch={this.handleSearch}
//         friends={data}
//         selectedUserIds={selectedUserIds}
//         handleCheckboxToggle={this.handleCheckboxToggle}
//         onNextButton={() => {
//           console.log('next!');
//         }}
//       />
//     );
//   }
// }

class App extends React.Component {
  state = {
    amounts: []
  };

  handleAmountChange = i => e => {
    const amounts = this.state.amounts.slice();
    amounts[i] = e.target.value;
    this.setState({ amounts });
  };

  render() {
    return (
      <div>
        <SplitMethodStep
          friends={friends}
          totalAmount={540.09}
          handleAmountChange={this.handleAmountChange}
        />
      </div>
    );
  }
}

export default App;
