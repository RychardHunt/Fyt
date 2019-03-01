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
import Head from "../Navigation/Head";
import { signUp } from "../../actions/OnboardActions";

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
      <Container style={{ top: Constants.statusBarHeight }}>
        <Head title="Register" navigation={navigate} />
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
          <View style={{ padding: "1%" }}>
            <Button
              rounded
              onPress={() => this.signUpPressed()}
              style={{ alignSelf: "center" }}
            >
              <Text>Sign Up</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
