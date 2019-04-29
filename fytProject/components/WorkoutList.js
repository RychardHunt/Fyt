import React from "react";
import { connect } from "react-redux";
import { List, ListItem, Container, Content, Picker } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  TouchableHighlight
} from "react-native";
import { Constants } from "expo";
import { bindActionCreators } from "redux";
import * as workoutActions from "../actions/WorkoutActions"; //To prevent overwriting.
import DialogInput from "react-native-dialog-input";
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
  },
  picker: {
    height: 60,
    width: "100%",
    padding: 10
  }
});

// This panel lists the sets for an excercise that a user will perform
class WorkoutList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWorkout: "defaultWorkout", //TODO first workout shown; new feature idea ... change default workout
      isDialogVisible: false
    };
  }

  componentDidMount() {
    this.props.changeWorkout("defaultWorkout");
  }

  // * `exercise`  The {String} excercise that this panel is for
  createExercisePanels() {
    let exercisePanels = [];
    let sortedWorkoutList = {};
    let workout = this.props.workout[this.state.selectedWorkout];
    let i = 0;
    Object.keys(workout)
      .sort()
      .forEach(function(key) {
        sortedWorkoutList[key] = workout[key];
      });

    for (exercise in sortedWorkoutList) {
      const exercisePanel = (
        <ExercisePanel
          key={i}
          exerciseName={exercise}
          exerciseDetails={
            this.props.workout[this.state.selectedWorkout][exercise]
          }
        />
      );
      exercisePanels.push(exercisePanel);
      i++; //to lazy to remake the loops :(
    }
    return exercisePanels;
  }

  createPicks() {
    let workouts = this.props.workout;
    let workoutList = [];
    let i = 0;
    for (workout in workouts) {
      if (workout != "selectedWorkout") {
        //setting property that is not a workout in /settings.js defualt redux states
        const PickerItem = (
          <Picker.Item key={i} label={workout} value={workout} />
        );
        i++; //to lazy to remake the loops :(
        workoutList.push(PickerItem);
      }
    }
    const PickerItem = (
      <Picker.Item key={++i} label={"Save Workout"} value={"saveWorkout"} />
    );
    i++; //to lazy to remake the loops :(
    workoutList.push(PickerItem);
    return workoutList;
  }

  render() {
    const navigate = this.props.navigation;
    let inputVisable = false;
    return (
      <Container style={{ top: Constants.statusBarHeight }}>
        <DialogInput
          isDialogVisible={this.state.isDialogVisible}
          title={"New Workout"}
          message={"Please enter a new workout name"}
          hintInput={"New name"}
          submitInput={inputText => {
            this.props.addWorkout(
              this.props.workout[this.state.selectedWorkout],
              inputText
            );
            this.props.changeWorkout(inputText);
            this.setState({
              isDialogVisible: false,
              selectedWorkout: inputText
            });
          }}
          closeDialog={() => this.setState({ isDialogVisible: false })}
        />
        <Head title="Workout" navigation={navigate} />
        <Content>
          <Text style={styles.workoutHeader}>Workout</Text>
          <Picker
            selectedValue={this.state.selectedWorkout}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              if (itemValue == "saveWorkout") {
                this.setState({
                  isDialogVisible: true
                });
              } else {
                this.props.changeWorkout(itemValue);
                this.setState({ selectedWorkout: itemValue });
              }
            }}
          >
            {this.createPicks()}
          </Picker>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View>{this.createExercisePanels()}</View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { workout: state.workout };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeWorkout: workoutActions.changeWorkout,
      addWorkout: workoutActions.addWorkout
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(WorkoutList);
