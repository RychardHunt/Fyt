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
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { Constants } from "expo";
import OnboardHead from "../OnboardHead";
import store from "../../../store";
import { changeAge } from "../../../actions/ProfileActions";
import platform from "../../../native-base-theme/variables/platform";
import getTheme from "../../../native-base-theme/components";
import { backgroundColor } from "../../../config/styles";

export default class Age extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0
    };
  }

  submitAge() {
    console.log(store.getState());
    let age = this.state.age * 1;
    if (typeof age === typeof 1 && age > 0) {
      store.dispatch(changeAge(age));
      if (store.getState().onboard.signup) {
        this.props.navigation.navigate("Goal");
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
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <Container
            style={{
              top: Constants.statusBarHeight,
              backgroundColor: backgroundColor
            }}
          >
            <OnboardHead title="Age" navigation={navigate} />
            <Text
              style={{
                fontSize: 20,
                paddingLeft: "5%",
                paddingTop: "5%",
                color: "white"
              }}
            >
              Please enter your age
            </Text>
            <View>
              <Form>
                <Item>
                  <Input
                    style={{ color: "white" }}
                    placeholder="Years"
                    onChangeText={age => this.setState({ age })}
                    value={this.state.age}
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
                  onPress={() => this.submitAge()}
                  style={{ alignSelf: "center" }}
                >
                  <Text>Submit</Text>
                </Button>
                <View style={{ padding: 5 }} />
              </View>
            </View>
          </Container>
        </TouchableWithoutFeedback>
      </StyleProvider>
    );
  }
}
