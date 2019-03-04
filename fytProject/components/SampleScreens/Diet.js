import React from "react";
import { Container, Text, View } from "native-base";
import { StatusBar, StyleSheet } from "react-native";
import { Constants } from "expo";
import Head from "../Navigation/Head";
import { backgroundColor } from "../../config/styles";

const styles = StyleSheet.create({
  bg_dark: {
    backgroundColor: backgroundColor,
    top: Constants.statusBarHeight
  }
});

export default class Diet extends React.Component {
  render() {
    const navigate = this.props.navigation;
    return (
      <Container style={styles.bg_dark}>
        <Head title="Diet" navigation={navigate} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "white", fontSize: 30 }}> Diet </Text>
        </View>
      </Container>
    );
  }
}
