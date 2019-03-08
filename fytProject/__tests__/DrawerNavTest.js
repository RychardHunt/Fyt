import "react-native";
import React from "react";
import DrawerNav from "../components/Navigation/DrawerNav";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import store from "../store";

test("Presentational components render correctly", () => {
  const navigation = { navigate: jest.fn() };
  const tree = renderer
    .create(
      <Provider store={store}>
        <DrawerNav />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
