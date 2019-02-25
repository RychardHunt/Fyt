import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";
import { Constants } from "expo";
import Head from "../Navigation/Head";
import { logIn } from "../../actions/OnboardActions";

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
      <Container style={{ top: Constants.statusBarHeight }}>
        <Head title="Login" navigation={navigate} />
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
          <Button rounded onPress={() => this.logInPressed()}>
            <Text>Log In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
