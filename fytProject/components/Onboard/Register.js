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
import containerStyle from "../../config/styles.js";
import Head from "../Navigation/Head";

export default class Register extends Component {
  render() {
    const navigate = this.props.navigation;
    return (
      <Container style={{ top: Constants.statusBarHeight }}>
        <Head title="Register" navigation={navigate} />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Email" />
            </Item>
            <Item>
              <Input placeholder="Password" />
            </Item>
            <Item>
              <Input placeholder="Confirm Password" />
            </Item>
          </Form>
          <Button rounded>
            <Text>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
