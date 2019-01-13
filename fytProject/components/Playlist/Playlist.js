import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Right,
  Icon,
  Title,
  Content
} from "native-base";
import Controls from "./Controls";

const styles = StyleSheet.create({
  bg_dark: {
    backgroundColor: "#303030"
  },
  header: {
    backgroundColor: "#B71C1C"
  }
});

export default class Playlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.bg_dark}>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Fyt</Title>
          </Body>
          <Right />
        </Header>
        <Controls />
      </Container>
    );
  }
}
