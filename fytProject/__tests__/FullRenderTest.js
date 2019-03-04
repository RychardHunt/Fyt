import "react-native";
import React from "react";
import App from "../App.js";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
