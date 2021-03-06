import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import { Constants } from "expo";

const routes = [
  ["Register", "Register"],
  ["Login", "Login"],
  ["Logout", "Logout"]
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
