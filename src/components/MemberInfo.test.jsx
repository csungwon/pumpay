import React from 'react';
import { shallow } from 'enzyme';
import MemberInfo from './MemberInfo';

describe('MemberInfo Component', () => {
  it('should not crash when rendering', () => {
    shallow(<MemberInfo displayName="Dave Kwon" />);
  });

  it("should render user's display name", () => {
    const wrapper = shallow(<MemberInfo displayName="Dave Kwon" />);
    expect(wrapper.contains('Dave Kwon')).toEqual(true);
  });
});
