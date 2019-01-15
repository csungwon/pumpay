import React, { Component } from 'react';
import SearchBar from '../../UI/SearchBar';
import ChatInfoList from './ChatInfoList';

// mock data for backend server
const chatsMock = [
  {
    id: 1,
    user: {
      imageUrl: 'https://github.com/csungwon.png?size=50',
      username: 'Sean Cho'
    },
    lastChat: {
      message: 'Hello1',
      createdAt: '2019-01-01'
    }
  },
  {
    id: 2,
    user: {
      imageUrl: 'https://github.com/davekwon.png?size=50',
      username: 'Dave Kwon'
    },
    lastChat: {
      message: 'Hello2',
      createdAt: '2018-12-28'
    }
  },
  {
    id: 3,
    user: {
      username: 'Yang Liu'
    },
    lastChat: {
      message: 'Hello3',
      createdAt: '2018-12-27'
    }
  },
  {
    id: 4,
    user: {
      username: 'Hyunah Kim'
    },
    lastChat: {
      message: 'Hello4',
      createdAt: '2019-01-02'
    }
  },
  {
    id: 5,
    user: {
      username: 'Solbi You'
    },
    lastChat: {
      message: 'Hello5',
      createdAt: '2018-12-31'
    }
  },
  {
    id: 6,
    user: {
      username: 'Armando Fox'
    },
    lastChat: {
      message: 'Hello6',
      createdAt: '2019-01-01'
    }
  }
];

export default class Chat extends Component {
  state = {
    chats: [],
    searchKey: ''
  };

  componentDidMount() {
    // mock request to backend server
    setTimeout(() => {
      this.setState({ chats: chatsMock });
    }, 2000);
  }

  onSearchInput = e => {
    this.setState({ searchKey: e.target.value });
  };

  render() {
    const { searchKey, chats } = this.state;
    // Same as:
    // const searchKey = this.state.searchKey;
    // const chats = this.state.chats;
    const data = chats
      .filter(chat => new RegExp(searchKey, 'i').test(chat.user.username))
      .sort((chat1, chat2) => {
        if (chat1.lastChat.createdAt > chat2.lastChat.createdAt) return -1;
        if (chat1.lastChat.createdAt < chat2.lastChat.createdAt) return 1;
        return 0;
      });

    return (
      <div>
        <SearchBar onChange={this.onSearchInput} />
        <ChatInfoList data={data} />
      </div>
    );
  }
}
