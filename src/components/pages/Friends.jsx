import React, { Component } from 'react';
import FriendInfoList from '../FriendInfoList';
import UserInfo from '../UserInfo';
import SearchBar from '../UI/SearchBar';

const user = {
  imageUrl: 'https://github.com/csungwon.png?size=60',
  username: 'Sungwon cho',
  amountOwe: 32.24,
  amountOwed: 56.11
};

const friendsMock = [
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
    username: 'Negative Person asdjaklsd asjdklasjdl asdjkalsdjl kasjkdlasj klj aklsdj',
    balance: -999.999
  }
];

export default class Friends extends Component {
  state = {
    friends: [],
    searchKey: ''
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ friends: friendsMock });
    }, 2000);
  }

  onSearchInput = e => {
    this.setState({ searchKey: e.target.value });
  };

  render() {
    const { friends, searchKey } = this.state;
    const data = friends
      .filter(friend => new RegExp(searchKey, 'i').test(friend.username))
      .sort((f1, f2) => {
        if (f1.username < f2.username) return -1;
        if (f1.username > f2.username) return 1;
        return 0;
      });

    return (
      <div>
        <UserInfo user={user} />
        <SearchBar onChange={this.onSearchInput} />
        <FriendInfoList data={data} />
      </div>
    );
  }
}
