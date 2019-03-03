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
import { Constants } from "expo";
import Controls from "./Controls";
import Head from "../Navigation/Head";

const styles = StyleSheet.create({
  bg_dark: {
    backgroundColor: "#303030",
    top: Constants.statusBarHeight
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
    const navigate = this.props.navigation;
    return (
      <Container style={styles.bg_dark}>
        <Head title="Playlist" navigation={navigate} />
        <Controls />
      </Container>
    );
  }
}
