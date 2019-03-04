import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, CardItem, Header } from "native-base";
import ExerciseHistoryPanel from "./ExerciseHistoryPanel";

const styles = StyleSheet.create({
  dateHeader: {
    fontSize: 30
  },
  workoutHeader: {
    borderBottomWidth: 1
  }
});

class WorkoutHistoryPanel extends React.Component {
  createExerciseHistoryPanels() {
    const exerciseHistoryPanels = [];
    for (const exercise in this.props.workout) {
      const exerciseHistoryPanel = (
        <ExerciseHistoryPanel
          key={exercise}
          exerciseName={exercise}
          exercise={this.props.workout[exercise]}
        />
      );
      exerciseHistoryPanels.push(exerciseHistoryPanel);
    }
    return exerciseHistoryPanels;
  }

  render() {
    return (
      <View>
        <Card>
          <View style={styles.workoutHeader}>
            <CardItem header>
              <Text style={styles.dateHeader}> {this.props.date}</Text>
            </CardItem>
          </View>
          {this.createExerciseHistoryPanels()}
        </Card>
      </View>
    );
  }
}
export default WorkoutHistoryPanel;
