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

export default class LoginRegisterHead extends React.Component {
  render() {
    return (
      <View>
        <Header style={colorTheme.header}>
          <Left>
            <Button
              transparent
              onPress={() => {
                store.dispatch({
                  type: "SIGN_UP",
                  payload: {
                    signup: false
                  }
                });
                Keyboard.dismiss();
                this.props.navigation.navigate("Welcome");
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
