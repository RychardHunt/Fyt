import React, { Component } from "react";
import {
  Container,
  Header,
  Input,
  Button,
  Text,
  View,
  StyleSheet,
  StyleProvider
} from "native-base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { Constants } from "expo";

import DrawerNav from "./DrawerNav";
import RegisterNav from "./RegisterNav";
import Login from "../Onboard/Login";
import WelcomeHead from "./WelcomeHead";

import { backgroundColor } from "../../../config/styles";
import platform from "../../../native-base-theme/variables/platform";
import getTheme from "../../../native-base-theme/components";

export default class Age extends Component {
  render() {
    const navigate = this.props.navigation;
    return (
      <StyleProvider style={getTheme(platform)}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <Container
            style={{
              top: Constants.statusBarHeight,
              backgroundColor: backgroundColor
            }}
          >
            <WelcomeHead title="" navigation={navigate} />
            <View style={{ top: "20%", alignItems: "center" }}>
              <Text style={{ fontSize: 30, color: "white" }}>
                Welcome to Fyt!
              </Text>
              <View style={{ height: "10%" }} />
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 20,
                    padding: 15,
                    textAlign: "center",
                    color: "white"
                  }}
                >
                  First, we'll ask you a few questions so we can create your
                  personalized fitness plan.
                </Text>
              </View>
              <View style={{ height: "10%" }} />
              <Button
                rounded
                onPress={() => this.props.navigation.navigate("Height")}
                style={{ alignSelf: "center" }}
              >
                <Text>Login</Text>
              </Button>
              <Button
                rounded
                onPress={() => this.props.navigation.navigate("Height")}
                style={{ alignSelf: "center" }}
              >
                <Text>Register</Text>
              </Button>
            </View>
          </Container>
        </TouchableWithoutFeedback>
      </StyleProvider>
    );
  }
}
