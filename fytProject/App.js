import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WorkoutContainer from './components/containers/WorkoutContainer';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/NavBar/NavBar';
<<<<<<< HEAD
import CalendarPicker from './components/CalendarPicker';
=======

>>>>>>> fc26f039f410b48409c0e5e3792f1ee24076cdb7
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
<<<<<<< HEAD



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
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


=======



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
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


>>>>>>> fc26f039f410b48409c0e5e3792f1ee24076cdb7
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    else{
    return (
      <Provider store={store}>
      <View style={styles.container}>
<<<<<<< HEAD
	<CalendarPicker/>
	
=======

>>>>>>> fc26f039f410b48409c0e5e3792f1ee24076cdb7
      </View>
      </Provider>
    );
  }
<<<<<<< HEAD
}
}
=======
}
}
>>>>>>> fc26f039f410b48409c0e5e3792f1ee24076cdb7
