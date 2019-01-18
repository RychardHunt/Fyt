import React from 'react';
import DrawerNav from './components/Navigation/DrawerNav';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Playlist from './components/Playlist/Playlist';
import WorkoutContainer from './components/containers/WorkoutContainer';
import Profile from './components/Profile/Profile';

console.disableYellowBox = true

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App   extends React.Component {ss
  constructor(props) {
    super(props);
    this.state = { loading  : true };
    console.ignoredYellowBox = ['Remote debugger'];
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
    else{
      return (
        <Provider store={store}>
          <DrawerNav/>
        </Provider>
      );s
    }
  }
}
