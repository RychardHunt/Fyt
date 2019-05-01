import React from "react";
import {
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Text,
  View
} from "native-base";
import store from "../../store";
import { StyleSheet } from "react-native";
import { colorTheme, headerColor } from "../../config/styles";
import { Constants } from "expo";
import { Keyboard } from "react-native";

export default class OnboardHead extends React.Component {
  render() {
    return (
      <View>
        <Header style={colorTheme.header}>
          <Left>
            <Button
              transparent
              onPress={() => {
                Keyboard.dismiss();
                if (store.getState().onboard.signup) {
                  this.props.navigation.goBack();
                } else {
                  this.props.navigation.navigate("Tab1");
                }
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
      </View>
    );
  }
}
