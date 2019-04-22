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
  View,
  StyleSheet,
  StyleProvider
} from "native-base";
import { Constants } from "expo";
import OnboardHead from "../OnboardHead";
import store from "../../../store";
import { changeWeight } from "../../../actions/ProfileActions";
import platform from "../../../native-base-theme/variables/platform";
import getTheme from "../../../native-base-theme/components";
import { backgroundColor } from "../../../config/styles";

export default class Weight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0
    };
  }

  submitWeight() {
    let weight = this.state.weight * 1;
    if (typeof weight === typeof 1 && weight > 0) {
      store.dispatch(changeWeight(weight));
      if (store.getState().onboard.signup) {
        this.props.navigation.navigate("Age");
      } else {
        this.props.navigation.navigate("Tab1");
      }
    } else {
      alert("Please enter a valid value");
    }
  }

  render() {
    const navigate = this.props.navigation;
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container
          style={{
            top: Constants.statusBarHeight,
            backgroundColor: backgroundColor
          }}
        >
          <OnboardHead title="Weight" navigation={navigate} />
          <Text
            style={{
              fontSize: 20,
              paddingLeft: "5%",
              paddingTop: "5%",
              color: "white"
            }}
          >
            Please enter your weight
          </Text>
          <View>
            <Form>
              <Item>
                <Input
                  placeholder="Pounds"
                  onChangeText={weight => this.setState({ weight })}
                  value={this.state.weight}
                />
              </Item>
            </Form>
            <View
              style={{
                padding: "1%",
                top: "10%",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View style={{ padding: 10 }} />
              <Button
                rounded
                onPress={() => this.submitWeight()}
                style={{ alignSelf: "center" }}
              >
                <Text>Submit</Text>
              </Button>
              <View style={{ padding: 5 }} />
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}
