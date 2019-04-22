import React, { Component } from "react";
import { Container, Header, Content, Button, Text, View } from "native-base";
import { Constants } from "expo";
import Head from "../Navigation/Head";
import { logOut } from "../../actions/OnboardActions";

export default class Logout extends Component {
  logOutPressed(navigate) {
    logOut(navigate);
  }

  render() {
    const navigate = this.props.navigation;
    return (
      <Container style={{ top: Constants.statusBarHeight }}>
        <Head title="Logout" navigation={navigate} />
        <Content>
          <View style={{ padding: "1%" }}>
            <Button
              rounded
              onPress={this.logOutPressed(this.props.navigation)}
              style={{ alignSelf: "center" }}
            >
              <Text>Log Out</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
