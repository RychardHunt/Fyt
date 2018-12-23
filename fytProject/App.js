import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NavBar from './components/NavBar/NavBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <NavBar/>
    );
  }
}
