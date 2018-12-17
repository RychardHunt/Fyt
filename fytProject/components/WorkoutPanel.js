import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Set from './Set';
import EditSetMenu from './EditSetMenu';

export default class WorkoutPanel extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      excercise: this.props.excercise,
      modalVisible: false
    }
    this.displayModal = this.displayModal.bind(this);

  }
  displayModal(){
    console.log("yeah")
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }
  render() {
    console.log("is this going at least");
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
        <View style={styles.bottomView}>
        <Text> Yod</Text>
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
    flex: 3,
    backgroundColor: '#ece523',
    alignItems: 'center',
    // justifyContent: 'flex-start',

  },
  bottomView: {
    flex: 1,
    backgroundColor: '#723543',
  },
  header: {
    fontSize: 40,
    // width: 200,
    // height: 100,
    padding: 10,

  }

});
