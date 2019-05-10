import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { DrawerNavigator } from "react-navigation";

import SideBar from "./SideBar";
import TabNav from "./TabNav";
import RegisterNav from "./RegisterNav";
import Login from "../Onboard/Login";
import Logout from "../Onboard/Logout";

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
