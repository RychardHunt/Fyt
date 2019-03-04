import React from "react";
import { Container, Text, View, Button, StyleProvider } from "native-base";
import { StatusBar, StyleSheet } from "react-native";
import Head from "../Navigation/Head";
import { Constants } from "expo";
import platform from "../../native-base-theme/variables/platform";
import getTheme from "../../native-base-theme/components";
import { backgroundColor } from "../../config/styles";

const styles = StyleSheet.create({
  bg_dark: {
    backgroundColor: backgroundColor,
    top: Constants.statusBarHeight
  }
});

export default class Settings extends React.Component {
  render() {
    const navigate = this.props.navigation;
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={styles.bg_dark}>
          <Head title="Settings" navigation={navigate} />
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={{ padding: 20 }}>
              <Button onPress={() => this.props.navigation.navigate("Tab1")}>
                <Text>Return to profile...</Text>
              </Button>
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}
