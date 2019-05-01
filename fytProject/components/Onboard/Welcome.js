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

import RegisterNav from "../Navigation/RegisterNav";
import Login from "./Login";
import WelcomeHead from "./WelcomeHead";

import { backgroundColor } from "../../config/styles";
import platform from "../../native-base-theme/variables/platform";
import getTheme from "../../native-base-theme/components";

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
            <WelcomeHead title="Fyt" navigation={navigate} />
            <View style={{ top: "20%", alignItems: "center" }}>
              <Text
                style={{ fontSize: 30, color: "white", textAlign: "center" }}
              >
                {`Welcome to Fyt.
Login or Register
to get started.`}
              </Text>
              <View style={{ height: "15%" }} />
              <Button
                rounded
                onPress={() => this.props.navigation.navigate("Login")}
                style={{
                  alignSelf: "center",
                  width: "30%",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: 18 }}>Login</Text>
              </Button>
              <View style={{ height: 15 }} />
              <Button
                rounded
                onPress={() => this.props.navigation.navigate("Register")}
                style={{
                  alignSelf: "center",
                  width: "30%",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: 18 }}>Register</Text>
              </Button>
            </View>
          </Container>
        </TouchableWithoutFeedback>
      </StyleProvider>
    );
  }
}
