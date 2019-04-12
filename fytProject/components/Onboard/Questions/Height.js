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
import { changeHeight } from "../../../actions/ProfileActions";

export default class Height extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foot: 0,
      inches: 0
    };
  }

  submitHeight() {
    let height = this.state.foot * 12 + this.state.inches * 1;
    if (typeof height === typeof 1 && height > 0) {
      store.dispatch(changeHeight(height));
      alert("Height Submitted");
    } else {
      alert("Please enter valid values");
    }
  }

  render() {
    const navigate = this.props.navigation;
    return (
      <Container style={{ top: Constants.statusBarHeight }}>
        <Head title="Height" navigation={navigate} />
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Foot"
                onChangeText={foot =>
                  this.setState({ foot: foot, inches: this.state.inches })
                }
                value={this.state.foot}
              />
            </Item>
            <Item>
              <Input
                placeholder="Inches"
                onChangeText={inches =>
                  this.setState({ foot: this.state.foot, inches: inches })
                }
                value={this.state.inches}
              />
            </Item>
          </Form>
          <View style={{ padding: "1%" }}>
            <Button
              rounded
              onPress={() => this.submitHeight()}
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
