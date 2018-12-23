import React, { Component } from "react";
import { Button, Text, Icon, Footer, FooterTab, View } from "native-base";
import { TabNavigator } from "react-navigation";
import Profile from '../SampleScreens/Profile';
import Diet from '../SampleScreens/Diet';
import Exercise from '../SampleScreens/Exercise';

export default (NavBar = TabNavigator(
  {
    Profile:  { screen: Profile },
    Diet:     { screen: Diet    },
    Exercise: { screen: Exercise}
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Profile")}>
              <Icon name="md-list" />
              <Text>Profile</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Diet")}>
              <Icon name="md-wine" />
              <Text>Diet</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Exercise")}>
              <Icon name="md-stopwatch" />
              <Text>Exercise</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
