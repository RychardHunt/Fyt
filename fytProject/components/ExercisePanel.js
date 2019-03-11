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
  constructor(props) {
    super(props);
    this.state = {
      expand: true
    };
  }

  createSetPanels(expand) {
    setPanels = [];
    setCompleted = true;
    for (set in this.props.exerciseDetails) {
      if (!this.props.exerciseDetails[set].completed) {
        setCompleted = false;
      }
    }
    const objLen = Object.keys(this.props.exerciseDetails).length + 1;
    console.log(JSON.stringify(this.props.exerciseDetails));
    for (let i = 1; i < objLen; i++) {
      console.log(expand);
      const setPanel = expand ? (
        <SetContainer
          key={i}
          setNumber={i}
          exerciseName={this.props.exerciseName}
          setDetails={this.props.exerciseDetails[i]}
        />
      ) : null;
      setPanels.push(setPanel);
    }
    return setPanels;
  }

  render() {
    return (
      <View style={styles.exercisePanel}>
        <Card style={styles.exerciseHeader}>
          <Text
            onPress={() => {
              this.setState({
                expand: !this.state.expand
              });
              console.log(this.state.expand);
            }}
            style={styles.exerciseHeaderText}
          >
            {this.props.exerciseName}
          </Text>
        </Card>
        {this.createSetPanels(this.state.expand)}
      </View>
    );
  }
}
export default ExercisePanel;
