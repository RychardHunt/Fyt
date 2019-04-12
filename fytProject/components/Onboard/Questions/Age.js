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
    let age = this.state.age * 1;
    if (typeof age === typeof 1 && age > 0) {
      store.dispatch(changeAge(age));
      alert("Age Submitted");
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
              <Button
                rounded
                onPress={() => this.props.navigation.navigate("Goal")}
                style={{ alignSelf: "center" }}
              >
                <Text>Next</Text>
              </Button>
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}
