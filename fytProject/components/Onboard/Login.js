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
  View
} from "native-base";
import { Constants } from "expo";
import { logIn, signUpScreen } from "../../actions/OnboardActions";

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
    return (
      <Container style={{ top: Constants.statusBarHeight }}>
        <Content>
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
          <View style={{ padding: "1%" }}>
            <Button
              rounded
              onPress={() => this.logInPressed()}
              style={{ alignSelf: "center" }}
            >
              <Text>Log In</Text>
            </Button>
            <Button
              small
              transparent
              onPress={() => signUpScreen()}
              style={{ alignSelf: "center" }}
            >
              <Text>Switch to Sign Up</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
