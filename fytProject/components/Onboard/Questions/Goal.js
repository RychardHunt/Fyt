import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Picker,
  Icon,
  Input,
  Button,
  Text,
  View
} from "native-base";
import { Constants } from "expo";
import Head from "../../Navigation/Head";
import store from "../../../store";
import { changeGoal } from "../../../actions/ProfileActions";

export default class Weight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: "Lose Mass"
    };
  }

  submitGoal() {
    let goal = this.state.goal;
    store.dispatch(changeGoal(goal));
    alert("Goal Submitted");
  }

  render() {
    const navigate = this.props.navigation;
    return (
      <Container style={{ top: Constants.statusBarHeight }}>
        <Head title="Goal" navigation={navigate} />
        <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your Goal"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.goal}
                onValueChange={value => this.setState({ goal: value })}
              >
                <Picker.Item label="Lose Mass" value="Lose Mass" />
                <Picker.Item label="Maintain Mass" value="Maintain Mass" />
                <Picker.Item label="Gain Mass" value="Gain Mass" />
              </Picker>
            </Item>
          </Form>
          <View style={{ padding: "1%" }}>
            <Button
              rounded
              onPress={() => this.submitGoal()}
              style={{ alignSelf: "center" }}
            >
              <Text>Submit</Text>
            </Button>
          </View>
        </Content>
        <View style={{ position: "absolute", bottom: "5%", marginLeft: 10 }}>
          <Button
            onPress={() => this.props.navigation.navigate("Tab1")}
            style={{ alignSelf: "center" }}
          >
            <Text>Return to profile...</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
