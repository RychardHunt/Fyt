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
import { changeWeight } from "../../../actions/ProfileActions";

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
      alert("Weight Submitted");
    } else {
      alert("Please enter a valid value");
    }
  }

  render() {
    const navigate = this.props.navigation;
    return (
      <Container style={{ top: Constants.statusBarHeight }}>
        <Head title="Weight" navigation={navigate} />
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Pounds"
                onChangeText={weight => this.setState({ weight })}
                value={this.state.weight}
              />
            </Item>
          </Form>
          <View style={{ padding: "1%" }}>
            <Button
              rounded
              onPress={() => this.submitWeight()}
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
