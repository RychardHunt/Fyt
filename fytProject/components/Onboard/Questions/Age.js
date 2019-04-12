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
  View
} from "native-base";
import { Constants } from "expo";
import Head from "../../Navigation/Head";
import store from "../../../store";
import { changeAge } from "../../../actions/ProfileActions";

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
      <Container style={{ top: Constants.statusBarHeight }}>
        <Head title="Age" navigation={navigate} />
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Years"
                onChangeText={age => this.setState({ age })}
                value={this.state.age}
              />
            </Item>
          </Form>
          <View style={{ padding: "1%" }}>
            <Button
              rounded
              onPress={() => this.submitAge()}
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
