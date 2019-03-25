import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS
} from "react-native";
import { Container, Card, Content, Button } from "native-base";
import * as workoutActions from "../actions/WorkoutActions"; //To prevent overwriting.
import SetContainer from "./containers/SetContainer";
import Swipeable from "react-native-swipeable";
import DialogInput from "react-native-dialog-input";

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
  },
  buttons: {
    width: 70,
    left: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "white"
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 20
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20
  },
  swipeItemText: {
    fontSize: 30,
    padding: 25
  }
});

class ExercisePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true,
      leftActionActivated: false,
      rightActionActivated: false,
      isDialogVisible: false
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
    for (let i = 1; i < objLen; i++) {
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

  deleteExercise() {
    this.props.deleteExercise(this.props.exerciseName);
    this.setState({
      leftActionActivated: false
    });
  }

  editExercise() {
    this.setState({
      rightActionActivated: false,
      isDialogVisible: true //launch alert
    });
  }

  render() {
    const leftContent = [
      <View style={styles.leftSwipeItem}>
        <Text style={styles.swipeItemText}>Remove</Text>
        {this.state.leftActionActivated ? this.deleteExercise() : null}
      </View>
    ];

    const rightContent = [
      <View style={styles.RightSwipeItem}>
        <Text style={styles.swipeItemText}>Edit</Text>
        {this.state.rightActionActivated ? this.editExercise() : null}
      </View>
    ];

    return (
      <View style={styles.exercisePanel}>
        <DialogInput
          isDialogVisible={this.state.isDialogVisible}
          title={"Edit Name"}
          message={"Please enter a new exercise name"}
          hintInput={"New name"}
          submitInput={inputText => {
            this.setState({
              isDialogVisible: false
            });
            this.props.editExerciseName(this.props.exerciseName, inputText);
          }}
          closeDialog={() => this.setState({ isDialogVisible: false })}
        />
        <Swipeable
          style={styles.exerciseHeader}
          leftContent={leftContent}
          rightContent={rightContent}
          onLeftActionActivate={() =>
            this.setState({ leftActionActivated: true })
          }
          onLeftActionDeactivate={() =>
            this.setState({ leftActionActivated: false })
          }
          leftActionActivationDistance={220}
          onRightActionActivate={() =>
            this.setState({ rightActionActivated: true })
          }
          onRightActionDeactivate={() =>
            this.setState({ rightActionActivated: false })
          }
          rightActionActivationDistance={220}
        >
          <Card>
            <Text
              onPress={() => {
                this.setState({
                  expand: !this.state.expand
                });
              }}
              style={styles.exerciseHeaderText}
            >
              {this.props.exerciseName}
            </Text>
            {this.createSetPanels(this.state.expand)}
          </Card>
        </Swipeable>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { workout: state.workout };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      editExerciseName: workoutActions.editExerciseName,
      deleteExercise: workoutActions.deleteExercise
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(ExercisePanel);
