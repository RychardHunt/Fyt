import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { StyleSheet } from "react-native";

import {
  Button,
  Text,
  Icon,
  Footer,
  FooterTab,
  StyleProvider
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import platform from "../../native-base-theme/variables/platform";
import getTheme from "../../native-base-theme/components";

import { colorTheme } from "../../config/styles";
import { backgroundColor, headerColor } from "../../config/styles";
import Profile from "../Profile/Profile";
import Diet from "../SampleScreens/Diet";
import WorkoutContainer from "../containers/WorkoutContainer";
import Playlist from "../Playlist/Playlist";

export default (Tab = TabNavigator(
  {
    Tab1: { screen: Profile },
    Tab2: { screen: Diet },
    Tab3: { screen: WorkoutContainer },
    Tab4: { screen: Playlist }
  },
  {
    swipeEnabled: false,
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <StyleProvider style={getTheme(platform)}>
          <Footer>
            <FooterTab>
              <Button
                vertical
                active={props.navigationState.index === 0}
                onPress={() => props.navigation.navigate("Tab1")}
              >
                <MaterialIcons
                  style={{ fontSize: 28, color: "white" }}
                  name="person"
                />
                <Text>Profile</Text>
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 1}
                onPress={() => props.navigation.navigate("Tab2")}
              >
                <MaterialCommunityIcons
                  style={{ fontSize: 28, color: "white" }}
                  name="food-apple"
                />
                <Text>Diet</Text>
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 2}
                onPress={() => props.navigation.navigate("Tab3")}
              >
                <Icon
                  name="ios-fitness"
                  style={{ fontSize: 28, color: "white" }}
                />
                <Text>Workout</Text>
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 3}
                onPress={() => props.navigation.navigate("Tab4")}
              >
                <FontAwesome
                  style={{ fontSize: 28, color: "white" }}
                  name="arrows-h"
                />
                <Text>Playlist</Text>
              </Button>
            </FooterTab>
          </Footer>
        </StyleProvider>
      );
    }
  }
));
