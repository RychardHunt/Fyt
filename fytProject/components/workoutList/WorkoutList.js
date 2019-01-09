import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem} from 'native-base';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import  ExercisePanel  from './ExercisePanel';
import AddExerciseContainer from './containers/AddExerciseContainer';
import ProgressBar from './ProgressBar.js';

const styles=StyleSheet.create({
  workoutHeader: {
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

// This panel lists the sets for an excercise that a user will perform
class WorkoutList extends React.Component {

// * `exercise`  The {String} excercise that this panel is for
  createExercisePanels= () => {
    exercisePanels = []
    for(exercise in this.props.workout){
      const exercisePanel =  (<ExercisePanel key={exercise}
                                             exerciseName={exercise}
                                             exerciseDetails={this.props.workout[exercise]}
                                             addSetFunction={this.props.addSetFunction}
                                             addSetMenuVisibility={this.props.addSetMenuVisibility}
                                             toggleSetMenuVisibilityFunction={this.props.toggleSetMenuVisibilityFunction}}
                                            />);
      exercisePanels.push(exercisePanel);
    }
    return exercisePanels;
  }

  render() {
    return (
      <View>
        <Text style={styles.workoutHeader}>
          Workout
        </Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View >
          {this.createExercisePanels()}
        </View>
        </ScrollView>
        <AddExerciseContainer/>

      <ProgressBar workoutProgress={this.props.workoutProgress}/>
      </View>
    );
  }
}

export default  WorkoutList;
