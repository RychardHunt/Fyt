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
import { Constants } from "expo";
import OnboardHead from "./OnboardHead";
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

  signUpPressed() {
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;
    if (password === confirmPassword) {
      signUp(this.state.email, password);
    } else {
      alert("Passwords mismatch");
    }
  }

  render() {
    const navigate = this.props.navigation;
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container
          style={{
            top: Constants.statusBarHeight,
            backgroundColor: backgroundColor
          }}
        >
          <OnboardHead title="Register" navigation={navigate} />
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
                  placeholder="Email"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                />
              </Item>
              <Item>
                <Input
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                />
              </Item>
              <Item>
                <Input
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
                top: "10%",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View style={{ padding: 10 }} />
              <Button
                rounded
                onPress={() => this.signUpPressed()}
                style={{ alignSelf: "center" }}
              >
                <Text>Sign Up</Text>
              </Button>
              <View style={{ padding: 5 }} />
              <Button
                rounded
                onPress={() => this.props.navigation.navigate("Intro")}
                style={{ alignSelf: "center" }}
              >
                <Text>Next</Text>
              </Button>
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}
