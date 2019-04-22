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
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { Constants } from "expo";
import LoginRegisterHead from "./LoginRegisterHead";
import { logIn } from "../../actions/OnboardActions";
import { backgroundColor } from "../../config/styles";
import platform from "../../native-base-theme/variables/platform";
import getTheme from "../../native-base-theme/components";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  logInPressed() {
    logIn(this.state.email, this.state.password);
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
            <LoginRegisterHead title="Login" navigation={navigate} />
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
              </Form>
              <View
                style={{
                  padding: "1%",
                  top: "2%",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <View style={{ padding: 15 }} />
                <View style={{ padding: "1%" }}>
                  <Button
                    rounded
                    onPress={() => this.logInPressed()}
                    style={{ alignSelf: "center" }}
                  >
                    <Text>Log In</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Container>
        </TouchableWithoutFeedback>
      </StyleProvider>
    );
  }
}
