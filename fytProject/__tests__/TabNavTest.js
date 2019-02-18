import "react-native";
import React from "react";
import TabNav from "../components/Navigation/TabNav";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<TabNav />).toJSON();
  expect(tree).toMatchSnapshot();
});
