import React from 'react';
import { Container, Text, View } from "native-base";
import { StatusBar } from "react-native";
import Head from '../Navigation/Head';
import { Constants } from 'expo';

export default class Diet extends React.Component {
  render() {
    const navigate = this.props.navigation;
    return (
      <Container style={{top: Constants.statusBarHeight}}>
        <Head title='Exercise' navigation = { navigate } />
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text> Exercise </Text>
        </View>
      </Container>
    );
  }
}
