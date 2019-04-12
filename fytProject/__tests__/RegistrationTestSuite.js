import "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import renderer from "react-test-renderer";

import Login from "../components/Onboard/Login";
import Register from "../components/Onboard/Register";
import Intro from "../components/Onboard/Questions/Intro";
import Height from "../components/Onboard/Questions/Height";
import Weight from "../components/Onboard/Questions/Weight";
import Age from "../components/Onboard/Questions/Age";
import Goal from "../components/Onboard/Questions/Goal";

test("Login screen renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Login />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Register screen renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Register />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Registration Intro screen renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Intro />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Height survey screen renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Height />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Weight survey screen renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Weight />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Age survey screen renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Age />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Goal survey screen renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Goal />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
