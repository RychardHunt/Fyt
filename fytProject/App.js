import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BottomBar from './components/BottomBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Rychard</Text>
        <BottomBar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
