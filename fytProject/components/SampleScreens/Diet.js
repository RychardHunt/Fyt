import React from 'react';
import { View, Text } from 'react-native';

export default class Diet extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Diet</Text>
      </View>
    );
  }
}
