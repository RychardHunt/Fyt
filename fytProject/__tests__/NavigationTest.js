import React from "react";
import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../store";
import { TextInput, View } from "react-native";
import UpdateProfile from "../components/SampleScreens/UpdateProfile";

Enzyme.configure({ adapter: new Adapter() });

test("Text input changes redux state and can be displayed elsewhere", () => {
  const t = "lorem ipsum";
  const wrapper = render(
    <Provider store={store}>
      <UpdateProfile />
    </Provider>
  );
  const innerWrapper = wrapper.find(UpdateProfile).render();
  expect(wrapper.find(UpdateProfile)).toHaveLength(1);
  expect(innerWrapper.find(View)).toHaveLength(1);
  expect(
    innerWrapper.findWhere(node => node.prop("testID") === "01")
  ).toHaveLength(1);
});
