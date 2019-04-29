import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import Welcome from "../Onboard/Welcome";
import RegisterNav from "./RegisterNav";
import Login from "../Onboard/Login";
import Logout from "../Onboard/Logout";
import TabNav from "./TabNav";

export default (OnboardNav = StackNavigator(
  {
    Welcome: { screen: Welcome },
    RegisterNav: { screen: RegisterNav },
    Login: { screen: Login },
    Logout: { screen: Logout },
    TabNav: { screen: TabNav }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
));
