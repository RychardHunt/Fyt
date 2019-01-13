import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WorkoutContainer from './components/containers/WorkoutContainer';
import LoginRegisterContainer from './components/containers/LoginRegisterContainer';
import OnboardingContainer from './components/containers/OnboardingContainer';
import { Provider } from 'react-redux';
import store from './store';
import {ONBOARDING_MODE} from './config/settings';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       loading: true,
       onboarding: ONBOARDING_MODE
    };
    console.ignoredYellowBox = ['Remote debugger'];
  }

  endOnboarding = () => {
    this.setState({
      onboarding: false
    });
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
    if (this.state.onboarding){
      return (
        <Provider store={store}>
        <View style={styles.container}>
          <OnboardingContainer stopOnboardingFunction={this.endOnboarding}/>
        </View>
        </Provider>
      );
    }
    else{
      return (
        <Provider store={store}>
        <View style={styles.container}>
          <WorkoutContainer/>
        </View>
        </Provider>
      );
    }


  }
}
}
