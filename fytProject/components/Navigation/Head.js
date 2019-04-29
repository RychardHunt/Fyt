import React from "react";
import {
  Header,
  Left,
  Button,
  Body,
  Title,
  Right,
  Text,
  View
} from "native-base";
import Logout from "../Onboard/Logout";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";
import { colorTheme, headerColor } from "../../config/styles";
import { Constants } from "expo";

export default class Head extends React.Component {
  render() {
    return (
      <View>
        <Header style={colorTheme.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Logout")}
            >
              <MaterialCommunityIcons
                style={{ fontSize: 28, color: "white" }}
                name="logout"
              />
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
