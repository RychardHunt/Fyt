import "react-native";
import React from "react";
import TabNav from "../components/Navigation/TabNav";

import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../store";

test("TabNav renders correctly", () => {
  const navigation = { navigate: jest.fn() };
  const tree = renderer
    .create(
      <Provider store={store}>
        <TabNav />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
