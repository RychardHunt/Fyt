import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



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
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    let excercise = "Squat";
    return (
      <View style={styles.container}>
      </View>
    );
  }
}