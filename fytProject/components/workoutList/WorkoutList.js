import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Container, Content} from 'native-base';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Constants } from 'expo';
import ExercisePanel  from './ExercisePanel';
import Head from './Navigation/Head';
import  ExercisePanel  from './ExercisePanel';
import AddExerciseContainer from '../containers/AddExerciseContainer';
import ProgressBar from './ProgressBar.js';

const styles=StyleSheet.create({
  workoutHeader: {
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1
  }
});

// This panel lists the sets for an excercise that a user will perform
class WorkoutList extends React.Component {

// * `exercise`  The {String} excercise that this panel is for
  createExercisePanels= () => {
    exercisePanels = []
    for(exercise in this.props.workout){
      const exercisePanel =  (<ExercisePanel key={exercise}
                                             exerciseName={exercise}
                                             setMenuVisible = {this.props.setMenuVisible}
                                             exerciseDetails={this.props.workout[exercise]}
                                             addSetFunction={this.props.addSetFunction}
                                             toggleSetMenuVisibilityFunction={this.props.toggleSetMenuVisibilityFunction}
                                            />);
      exercisePanels.push(exercisePanel);
    }

    return exercisePanels;
  }


  render() {
    const navigate = this.props.navigation;
    return (
      <Container style={{top:Constants.statusBarHeight}}>
        <Head title='Workout' navigation = { navigate } />
        <Content>
          <Text style={styles.workoutHeader}>
            Workout
          </Text>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View>
              {this.createExercisePanels()}
            </View>
          </ScrollView>
        </Content>
      </Container>
      <View style={styles.container}>
        <Text style={styles.workoutHeader}>
          Workout
        </Text>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View>
            {this.createExercisePanels()}
          </View>
        </ScrollView>
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
