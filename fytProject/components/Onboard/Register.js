import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  View,
  StyleProvider,
  StyleSheet
} from "native-base";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Constants } from "expo";
import LoginRegisterHead from "./LoginRegisterHead";
import { signUp } from "../../actions/OnboardActions";
import { backgroundColor } from "../../config/styles";
import platform from "../../native-base-theme/variables/platform";
import getTheme from "../../native-base-theme/components";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  signUpPressed(navigation) {
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;
    if (password === confirmPassword) {
      signUp(this.state.email, password, navigation);
    } else {
      alert("Passwords mismatch");
    }
  }

  render() {
    const navigate = this.props.navigation;
    return (
      <StyleProvider style={getTheme(platform)}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Container
            style={{
              top: Constants.statusBarHeight,
              backgroundColor: backgroundColor
            }}
          >
            <LoginRegisterHead title="Register" navigation={navigate} />
            <Text
              style={{
                fontSize: 20,
                paddingLeft: "5%",
                paddingTop: "5%",
                color: "white"
              }}
            >
              First, enter an email and password
            </Text>
            <View>
              <Form>
                <Item>
                  <Input
                    style={{ color: "white" }}
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                  />
                </Item>
                <Item>
                  <Input
                    style={{ color: "white" }}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                  />
                </Item>
                <Item>
                  <Input
                    style={{ color: "white" }}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    onChangeText={confirmPassword =>
                      this.setState({ confirmPassword })
                    }
                    value={this.state.confirmPassword}
                  />
                </Item>
              </Form>
              <View
                style={{
                  padding: "1%",
                  top: "5%",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <View style={{ padding: 10 }} />
                <Button
                  rounded
                  onPress={() => this.signUpPressed(this.props.navigation)}
                  style={{ alignSelf: "center" }}
                >
                  <Text>Sign Up</Text>
                </Button>
              </View>
            </View>
          </Container>
        </TouchableWithoutFeedback>
      </StyleProvider>
    );
  }
}
