import React from "react";
import { shallow } from "enzyme";
import MemberInfo from "./MemberInfo";

const retrieverURL =
  "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiRid3x1tDfAhXYHTQIHZkBAyIQjRx6BAgBEAU&url=http%3A%2F%2Fwww.vetstreet.com%2Fdogs%2Fgolden-retriever&psig=AOvVaw0JILc5eB1u0dXFUQMJFuNn&ust=1546572826910299";

describe("MemberInfo Component", () => {
  it("should not crash when rendering", () => {
    shallow(
      <MemberInfo
        displayName="Dave Kwon"
        imageURL={retrieverURL}
        amount={32.97}
      />
    );
  });

  it("should render user's display name", () => {
    const wrapper = shallow(
      <MemberInfo
        displayName="Dave Kwon"
        imageURL={retrieverURL}
        amount={-64.29}
      />
    );
    expect(wrapper.contains("Dave Kwon")).toEqual(true);
  });

  it("should render user profile image", () => {
    const wrapper = shallow(
      <MemberInfo
        displayName="Dave Kwon"
        imageURL={retrieverURL}
        amount={31.53}
      />
    );
    expect(wrapper.find("img").prop("src")).toEqual(retrieverURL);
  });

  it("should render To Pay and the amount when amount > 0", () => {
    const wrapper = shallow(
      <MemberInfo
        displayName="Dave Kwon"
        imageURL={retrieverURL}
        amount={36.75}
      />
    );
    expect(wrapper.text()).toContain('To Pay');
    expect(wrapper.text()).toContain('36.75');
  });

  it("should render To Receive and the amount when amount < 0", () => {
    const wrapper = shallow(
      <MemberInfo
        displayName="Dave Kwon"
        imageURL={retrieverURL}
        amount={-73.29}
      />
    );

    expect(wrapper.text()).toContain('To Receive');
    expect(wrapper.text()).toContain('73.29');
  });

  it("should render nothing when the amount is 0", () => {
    const wrapper = shallow(
      <MemberInfo
        displayName="Dave Kwon"
        imageURL={retrieverURL}
        amount={0}
      />
    );

    expect(wrapper.contains("To Pay")).toEqual(false);
    expect(wrapper.contains("To Receive")).toEqual(false);
  });
});
