import "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import renderer from "react-test-renderer";

import DrawerNav from "../components/Navigation/DrawerNav";
import TabNav from "../components/Navigation/TabNav";
import Profile from "../components/Profile/Profile";
import Diet from "../components/SampleScreens/Diet";
import WorkoutContainer from "../components/containers/WorkoutContainer";
import Playlist from "../components/Playlist/Playlist";
import SettingsScreen from "../components/SampleScreens/SettingsScreen";
import UpdateProfile from "../components/SampleScreens/UpdateProfile";
import Register from "../components/Onboard/Register";
import Login from "../components/Onboard/Login";

test("Drawer navigation components render", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <DrawerNav />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Tab navigation component renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Diet />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Profile screen renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Profile />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Diet screen renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Diet />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Exercise screen renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <WorkoutContainer />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Playlist screen renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Playlist />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Settings screen renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <SettingsScreen />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("UpdateProfile screen renders", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <UpdateProfile />
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
