import "react-native";
import React from "react";
import BottomBar from "components/BottomBar";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<BottomBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
