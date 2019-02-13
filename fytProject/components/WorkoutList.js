import React from "react";
import { connect } from "react-redux";
import { List, ListItem, Container, Content } from "native-base";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Constants } from "expo";
import ExercisePanel from "./ExercisePanel";
import Head from "./Navigation/Head";

const styles = StyleSheet.create({
  scrollView: {
    flex: 0
  },
  workoutHeader: {
    fontSize: 40,
    alignItems: "center",
    justifyContent: "center"
  }
});

// This panel lists the sets for an excercise that a user will perform
class WorkoutList extends React.Component {
  // * `exercise`  The {String} excercise that this panel is for
  createExercisePanels() {
    exercisePanels = [];
    for (exercise in this.props.workout) {
      const exercisePanel = (
        <ExercisePanel
          key={exercise}
          exerciseName={exercise}
          exerciseDetails={this.props.workout[exercise]}
        />
      );
      exercisePanels.push(exercisePanel);
    }
    return exercisePanels;
  }

  render() {
    const navigate = this.props.navigation;
    return (
      <Container style={{ top: Constants.statusBarHeight }}>
        <Head title="Workout" navigation={navigate} />
        <Content>
          <Text style={styles.workoutHeader}>Workout</Text>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View>{this.createExercisePanels()}</View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default WorkoutList;
