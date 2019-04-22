import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Icon,
  Picker,
  Item,
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
import { changeGoal } from "../../../actions/ProfileActions";
import platform from "../../../native-base-theme/variables/platform";
import getTheme from "../../../native-base-theme/components";
import { backgroundColor } from "../../../config/styles";

export default class Goal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: "Lose Mass"
    };
  }

  submitGoal() {
    let goal = this.state.goal;
    store.dispatch(changeGoal(goal));
    this.props.navigation.navigate("Tab1");
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
            <OnboardHead title="Goal" navigation={navigate} />
            <Text
              style={{
                fontSize: 20,
                paddingLeft: "5%",
                paddingTop: "5%",
                color: "white"
              }}
            >
              Please choose your goal
            </Text>
            <View>
              <Form>
                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined, color: "white" }}
                    placeholder="Select your Goal"
                    selectedValue={this.state.goal}
                    onValueChange={value => this.setState({ goal: value })}
                  >
                    <Picker.Item label="Lose Mass" value="Lose Mass" />
                    <Picker.Item label="Maintain Mass" value="Maintain Mass" />
                    <Picker.Item label="Gain Mass" value="Gain Mass" />
                  </Picker>
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
                  onPress={() => this.submitGoal()}
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
