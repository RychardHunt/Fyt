import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { DrawerNavigator } from "react-navigation";
import SideBar from "./SideBar";
import TabNav from "./TabNav";
import SettingsScreen from "../SampleScreens/SettingsScreen";
import UpdateProfile from "../SampleScreens/UpdateProfile";
import Register from "../Onboard/Register";
import Login from "../Onboard/Login";

export default (DrawerNav = DrawerNavigator(
  {
    Tabs: { screen: TabNav },

    ChangeProfile: { screen: UpdateProfile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
));
