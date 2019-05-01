import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import Register from "../Onboard/Register";
import Intro from "../Onboard/Questions/Intro";
import Height from "../Onboard/Questions/Height";
import Weight from "../Onboard/Questions/Weight";
import Age from "../Onboard/Questions/Age";
import Goal from "../Onboard/Questions/Goal";

export default (RegisterNav = StackNavigator(
  {
    Register: { screen: Register },
    Intro: { screen: Intro },
    Height: { screen: Height },
    Weight: { screen: Weight },
    Age: { screen: Age },
    Goal: { screen: Goal }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
));
