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
export default class Register extends Component {
  render() {
    return (
      <Container>
        <Header />
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
