import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Set from './Set';
import EditSetMenu from './EditSetMenu';

// This panel lists the sets for an excercise that a user will perform
export default class WorkoutPanel extends React.Component {

// * `excercise`  The {String} excercise that this panel is for
  constructor(props){
    super(props);
    this.state = {
      excercise: this.props.excercise,
      modalVisible: false
    }
    this.displayModal = this.displayModal.bind(this);

  }
  displayModal(){
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }
  render() {
    return (
      <View style={styles.container}>
       <EditSetMenu displayModal={this.displayModal} modalVisible={this.state.modalVisible}
        weight="50" reps="100"/>
        <View style={styles.topView}>
        <Text style={styles.header}>
        {this.state.excercise}
        </Text>
        <Set editSet={this.displayModal.bind(this)} setNumber="1" reps="10" weight="100"/>
        <Set editSet={this.displayModal.bind(this)} setNumber="1" reps="10" weight="110"/>
        <Set editSet={this.displayModal.bind(this)} setNumber="1" reps="10" weight="120"/>
        </View>
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
    backgroundColor: '#a5a5a5',
  },
  topView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    },
  header: {
    fontSize: 40,
    padding: 10,

  }

});
