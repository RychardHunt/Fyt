import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import WorkoutHistoryPanel from "./WorkoutHistoryPanel";

const styles = StyleSheet.create({
  workoutListHeader: {
    fontSize: 40,
    textAlign: "center"
  }
});

class WorkoutHistoryList extends React.Component {
  createWorkoutHistoryPanels() {
    workoutPanels = [];
    for (const workout in this.props.listOfWorkouts) {
      const workoutHistoryPanel = (
        <WorkoutHistoryPanel
          workout={this.props.listOfWorkouts[workout]}
          date={workout}
          key={workout}
        />
      );
      workoutPanels.push(workoutHistoryPanel);
    }
    return workoutPanels;
  }

  render() {
    return (
      <View>
        <Text style={styles.workoutListHeader}> Your Workout History</Text>
        <ScrollView>{this.createWorkoutHistoryPanels()}</ScrollView>
      </View>
    );
  }
}
export default WorkoutHistoryList;
