import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Set extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      setNumber: this.props.setNumber,
      reps: this.props.reps,
      weight: this.props.weight,
      editSet: this.props.editSet
    }
  }
  editFields(){

  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.textView}>
      Sets: {this.state.setNumber} | {this.props.reps}x{this.props.weight}
      </Text>
      <Button onPress={this.state.editSet} title="Edit"/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#a5a5a5',
    padding: 10,
  },
  textView: {
    fontSize: 20
  }
});
export default Set;
