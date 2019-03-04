import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { DrawerNavigator } from "react-navigation";
import SideBar from "./SideBar";
import TabNav from "./TabNav";
import SettingsScreen from "../SampleScreens/SettingsScreen";
import UpdateProfile from "../SampleScreens/UpdateProfile";

export default (DrawerNav = DrawerNavigator(
  {
    Tabs: { screen: TabNav },
    Settings: { screen: SettingsScreen },
    ChangeProfile: { screen: UpdateProfile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
));
