import React from 'react';
import { Header, Left, Button, Icon, Body, Title, Right, Text } from 'native-base';

export default class Head extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right/>
      </Header>
    );
  }
}
