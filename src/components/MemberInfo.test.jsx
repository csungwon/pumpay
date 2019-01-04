import React from 'react';
import { shallow } from 'enzyme';
import MemberInfo from './MemberInfo';

const MemberInfoProps = {
  displayName: 'Dave Kwon',
  imageURL: 'https://source.unsplash.com/random',
  amount: 32.97
};

describe('MemberInfo Component', () => {
  it('should not crash when rendering', () => {
    shallow(<MemberInfo {...MemberInfoProps} />);
  });

  it("should render user's display name", () => {
    const wrapper = shallow(<MemberInfo {...MemberInfoProps} />);
    expect(wrapper.contains('Dave Kwon')).toEqual(true);
  });

  it('should render user profile image', () => {
    const wrapper = shallow(<MemberInfo {...MemberInfoProps} />);
    expect(wrapper.find('img').prop('src')).toEqual(MemberInfoProps.imageURL);
  });

  it('should render To Pay and the amount when amount > 0', () => {
    const props = {
      ...MemberInfoProps,
      amount: 36.75
    };
    const wrapper = shallow(<MemberInfo {...props} />);
    expect(wrapper.text()).toContain('To Pay');
    expect(wrapper.text()).toContain('36.75');
  });

  it('should render To Receive and the amount when amount < 0', () => {
    const props = {
      ...MemberInfoProps,
      amount: -73.29
    };
    const wrapper = shallow(<MemberInfo {...props} />);

    expect(wrapper.text()).toContain('To Receive');
    expect(wrapper.text()).toContain('73.29');
  });

  it('should render nothing when the amount is 0', () => {
    const props = {
      ...MemberInfoProps,
      amount: 0
    };
    const wrapper = shallow(<MemberInfo {...props} />);

    expect(wrapper.contains('To Pay')).toEqual(false);
    expect(wrapper.contains('To Receive')).toEqual(false);
  });
});
