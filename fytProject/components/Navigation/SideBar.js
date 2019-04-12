import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import { Constants } from "expo";

const routes = [
  ["Settings", "Settings"],
  ["Register", "Register"],
  ["Login", "Login"],
  ["Height", "Height"],
  ["Weight", "Weight"],
  ["Age", "Age"],
  ["Goal", "Goal"],
  [("ChangeProfile", "Change Profile")]
];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={{ top: Constants.statusBarHeight }}>
        <Content>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data[0])}
                >
                  <Text>{data[1]}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
