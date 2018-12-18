import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// This Component represents a set during a work-out
class Set extends React.Component {

// * `setNumber` The {Number} set number of this set (1-n)
// * `reps` The {Number} number of reps to be doone during this set
// * `weight` The {Number} weight that is going to be done for this set
// * `editSet` A {Function} function that tells the component what to do when the user tries to edit the set
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
