import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { DrawerNavigator } from "react-navigation";
import SideBar from "./SideBar";
import TabNav from "./TabNav";
import SettingsScreen from "../SampleScreens/SettingsScreen";
import Register from "../Onboard/Register";
import Login from "../Onboard/Login";

export default (DrawerNav = DrawerNavigator(
  {
    Tabs: { screen: TabNav },
    Settings: { screen: SettingsScreen },
    Register: { screen: Register },
    Login: { screen: Login }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
));
