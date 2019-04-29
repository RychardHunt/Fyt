import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import Welcome from "../Onboard/Welcome";
import RegisterNav from "./RegisterNav";
import Login from "../Onboard/Login";

export default (RegisterNav = StackNavigator(
  {
    Welcome: { screen: Welcome },
    RegisterNav: { screen: RegisterNav },
    Login: { screen: Intro }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
));
