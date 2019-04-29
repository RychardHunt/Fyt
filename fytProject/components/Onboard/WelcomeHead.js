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
import { StyleSheet } from "react-native";
import { colorTheme, headerColor } from "../../config/styles";
import { Constants } from "expo";

export default class WelcomeHead extends React.Component {
  render() {
    return (
      <View>
        <Header style={colorTheme.header}>
          <Left />
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
      </View>
    );
  }
}
