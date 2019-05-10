import React, { Component } from "react";
import { Modal } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  View,
  Spinner
} from "native-base";
import { Constants } from "expo";
import { logOut } from "../../actions/OnboardActions";
import WelcomeHead from "./WelcomeHead";
import { backgroundColor, headerColor } from "../../config/styles";

export default class Logout extends Component {
  logOutPressed(navigate) {
    logOut(navigate);
  }
  render() {
    const navigate = this.props.navigation;
    this.logOutPressed(navigate);
    return (
      <Container
        style={{
          top: Constants.statusBarHeight,
          backgroundColor: backgroundColor
        }}
      >
        <WelcomeHead title="" navigation={navigate} />
        <View style={{ top: "35%" }}>
          <Spinner color={headerColor} />
        </View>
      </Container>
    );
  }
}
