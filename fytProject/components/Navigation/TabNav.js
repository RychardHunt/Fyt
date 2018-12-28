import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import Tab1 from '../SampleScreens/Tab1';
import Tab2 from '../SampleScreens/Tab2';
import Tab3 from '../SampleScreens/Tab3';

export default (BottomBar = TabNavigator(
  {
    Tab1: { screen: Tab1 },
    Tab2: { screen: Tab2 },
    Tab3: { screen: Tab3 }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props =>
    {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Tab1")}>
              <Icon name="md-list" />
              <Text>Tab1</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Tab2")}>
              <Icon name="md-wine" />
              <Text>Tab2</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Tab3")}>
              <Icon name="md-stopwatch" />
              <Text>Tab3</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
