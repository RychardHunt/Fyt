import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WorkoutPanel from './components/WorkoutPanel';

import BottomBar from './components/BottomBar';

export default class App extends React.Component {

  render() {
    let excercise = "Squat";
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9a9a9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
