import React from 'react';
import { Container, Text, Content } from "native-base";
import { StatusBar } from "react-native";
import Head from '../Navigation/Head';
import { Constants } from 'expo';

export default class Tab2 extends React.Component {
  render() {
    const navigate = this.props.navigation;
    return (
      <Container style={{top: Constants.statusBarHeight}}>
        <Head title='Tab2' navigation = { navigate } />
        <Content>
          <Text> Tab2 </Text>
        </Content>
      </Container>
    );
  }
}
