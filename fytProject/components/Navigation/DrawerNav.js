import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { DrawerNavigator } from "react-navigation";
import SideBar from "./SideBar";
import TabNav from "./TabNav";
import SettingsScreen from "../SampleScreens/SettingsScreen";
import UpdateProfile from "../SampleScreens/UpdateProfile";
import RegisterNav from "./RegisterNav";
import Login from "../Onboard/Login";
import Logout from "../Onboard/Logout";
import Height from "../Onboard/Questions/Height";
import Weight from "../Onboard/Questions/Weight";
import Age from "../Onboard/Questions/Age";
import Goal from "../Onboard/Questions/Goal";

export default (DrawerNav = DrawerNavigator(
  {
    Tabs: { screen: TabNav },
    RegisterNav: { screen: RegisterNav },
    Login: { screen: Login },
    Logout: { screen: Logout }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
));
