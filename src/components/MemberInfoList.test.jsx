import React from 'react';
import { shallow } from 'enzyme';

import MemberInfoList from './MemberInfoList';

const MemberInfoListProps = {
  members: [
    {
      displayName: 'Dave Kwon',
      imageURL: 'https://source.unsplash.com/random',
      amount: 32.14
    },
    {
      displayName: 'Sungwon Cho',
      imageURL: 'https://source.unsplash.com/random',
      amount: -24.14
    },
    {
      displayName: 'Michael Yang',
      imageURL: 'https://source.unsplash.com/random',
      amount: 0
    },
    {
      displayName: 'Julia Kim',
      imageURL: 'https://source.unsplash.com/random',
      amount: 23.11
    }
  ]
};

describe('MemberInfoList Component', () => {
  it('should render without crashing', () => {
    shallow(<MemberInfoList {...MemberInfoListProps} />);
  });

  it('should render N <MemberInfo/> components when received array `members` of length N', () => {
    const wrapper = shallow(<MemberInfoList {...MemberInfoListProps} />);
    expect(wrapper.find('MemberInfo')).toHaveLength(
      MemberInfoListProps.members.length
    );
  });
});
