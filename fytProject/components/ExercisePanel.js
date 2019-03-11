import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { Container, Card, Content } from "native-base";
import SetContainer from "./containers/SetContainer";

const styles = StyleSheet.create({
  exerciseHeaderText: {
    fontSize: 40
  },
  exerciseHeader: {
    alignItems: "center",
    justifyContent: "center"
  },
  exercisePanel: {
    marginBottom: 20
  }
});

class ExercisePanel extends React.Component {
  createSetPanels() {
    setPanels = [];
    for (set in this.props.exerciseDetails) {
      const setPanel = (
        <SetContainer
          key={set}
          setNumber={set}
          exerciseName={this.props.exerciseName}
          setDetails={this.props.exerciseDetails[set]}
        />
      );
      setPanels.push(setPanel);
    }
    return setPanels;
  }

  render() {
    return (
      <View style={styles.exercisePanel}>
        <Card style={styles.exerciseHeader}>
          <Text style={styles.exerciseHeaderText}>
            {this.props.exerciseName}
          </Text>
        </Card>
        {this.createSetPanels()}
      </View>
    );
  }
}
export default ExercisePanel;
