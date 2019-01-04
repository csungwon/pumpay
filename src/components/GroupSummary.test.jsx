import React from 'react';
import { shallow } from 'enzyme';

import GroupSummary from './GroupSummary';

const GroupSummaryProps = {
  title: 'Dave & Sean & Yang',
  creator: 'Dave',
  numMembers: 3,
  updates: 7
};

describe('GroupSummary Component', () => {
  it('should render without crashing', () => {
    shallow(<GroupSummary {...GroupSummaryProps} />);
  });

  it('should render a title of a group', () => {
    const wrapper = shallow(<GroupSummary {...GroupSummaryProps} />);
    expect(wrapper.text()).toContain(GroupSummaryProps.title);
  });

  it('should render title as "`CREATOR OF THE GROUP` and `N-1` more..." when no title is given', () => {
    const props = {
      ...GroupSummaryProps,
      title: undefined
    };
    const wrapper = shallow(<GroupSummary {...props} />);
    expect(wrapper.text()).toContain(
      `${props.creator} and ${props.numMembers - 1} more...`
    );
  });

  it('should render a chat icon', () => {
    const wrapper = shallow(<GroupSummary {...GroupSummaryProps} />);
    expect(wrapper.find('.chat-icon')).toHaveLength(1);
  });

  it('should render the number of bill updates to see', () => {
    const wrapper = shallow(<GroupSummary {...GroupSummaryProps} />);
    expect(wrapper.find('.chat-icon').text()).toContain(
      GroupSummaryProps.updates
    );
  });

  it('should not render the number of bill updates when updates = 0', () => {
    const props = {
      ...GroupSummaryProps,
      updates: 0
    };
    const wrapper = shallow(<GroupSummary {...props} />);
    expect(wrapper.find('.chat-icon').text()).not.toContain('0');
  });
});
