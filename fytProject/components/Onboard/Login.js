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
          <View style={{ padding: "1%" }}>
            <Button
              rounded
              onPress={() => this.logInPressed()}
              style={{ alignSelf: "center" }}
            >
              <Text>Log In</Text>
            </Button>
          </View>
        </Content>
        <View style={{ position: "absolute", bottom: "5%", marginLeft: 10 }}>
          <Button
            onPress={() => this.props.navigation.navigate("Tab1")}
            style={{ alignSelf: "center" }}
          >
            <Text>Return to profile...</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
