import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Set from './Set';


// This panel lists the sets for an excercise that a user will perform
class WorkoutPanel extends React.Component {

// * `exercise`  The {String} excercise that this panel is for
  constructor(props){
    super(props);
    this.state = {
      exercise: this.props.exercise,

    }


  }
  createSetPanels(){
    setPanels = [];
    for(set in this.props.workout[this.props.exercise]){
      const setPanel = (<Set key={set} exercise={this.props.exercise}
                             setNumber={set} reps = "10"
                       weight="100"/>);
      setPanels.push(setPanel);

    }
    return setPanels;

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
        <Text style={styles.header}>
        {this.state.excercise}
        </Text>
        {this.createSetPanels()}
        </View>
      </View>
    );
  }
}
function mapStateToProps(state){
  return {
     workout : state.workout
  };
}
export default connect(mapStateToProps)(WorkoutPanel);


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
