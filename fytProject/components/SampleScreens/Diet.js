import React from "react";
import { Container, Text, View } from "native-base";
import { StatusBar } from "react-native";
import { Constants } from "expo";
import Head from "../Navigation/Head";

export default class Diet extends React.Component {
  render() {
    const navigate = this.props.navigation;
    return (
      <Container style={{ top: Constants.statusBarHeight }}>
        <Head title="Diet" navigation={navigate} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Diet </Text>
        </View>
      </Container>
    );
  }
}
