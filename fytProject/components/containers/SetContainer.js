import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { bindActionCreators } from "redux";
import { Container, Card, Content, Icon } from "native-base";
import { connect } from "react-redux";
import * as workoutActions from "../../actions/WorkoutActions"; //To prevent overwriting.
import EditSetMenu from "../EditSetMenu";
import Swipeable from "react-native-swipeable";
import { COLOR_1, COLOR_2 } from "../../config/settings";

class SetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      leftActionActivated: false,
      rightActionActivated: false
    };
  }

  changeSetCompletionStatus = (exercise, setNumber) => {
    this.props.changeSetCompletionStatus(
      exercise,
      setNumber,
      this.props.selectedWorkout
    );
  };
  handleFormSubmit = formInput => {
    this.props.editSet(
      this.props.exerciseName,
      this.props.setNumber,
      formInput.reps,
      formInput.weight,
      this.props.selectedWorkout
    );
  };

  deleteSet() {
    this.props.deleteSet(
      this.props.exerciseName,
      this.props.setNumber,
      this.props.selectedWorkout
    );
    this.setState({
      leftActionActivated: false
    });
  }

  editSet = () => {
    this.setState({
      rightActionActivated: false,
      modalVisible: !this.state.modalVisible
    });
  };

  render() {
    const leftContent = [
      <View key={0} style={styles.leftSwipeItem}>
        <Text style={styles.swipeItemText}>Remove</Text>
        {this.state.leftActionActivated ? this.deleteSet() : null}
      </View>
    ];

    const rightContent = [
      <View key={0} style={styles.RightSwipeItem}>
        <Text style={styles.swipeItemText}>Edit</Text>
        {this.state.rightActionActivated ? this.editSet() : null}
      </View>
    ];

    return (
      <View>
        <Swipeable
          key={0}
          style={styles.exerciseHeader}
          leftContent={leftContent}
          rightContent={rightContent}
          onLeftActionRelease={() =>
            this.setState({ leftActionActivated: true })
          }
          onLeftActionDeactivate={() =>
            this.setState({ leftActionActivated: false })
          }
          leftActionActivationDistance={220}
          onRightActionRelease={() =>
            this.setState({ rightActionActivated: true })
          }
          onRightActionDeactivate={() =>
            this.setState({ rightActionActivated: false })
          }
          rightActionActivationDistance={220}
        >
          <EditSetMenu
            modalVisible={this.state.modalVisible}
            setNumber={this.props.setNumber}
            exerciseName={this.props.exerciseName}
            weight={this.props.setDetails.weight}
            reps={this.props.setDetails.reps}
            editSetFunction={this.handleFormSubmit}
            toggleModalFunction={this.editSet}
          />

          <Card style={styles.setStyle}>
            <TouchableOpacity
              onPress={() =>
                this.changeSetCompletionStatus(
                  this.props.exerciseName,
                  this.props.setNumber
                )
              }
            >
              <View
                style={[
                  styles.circleButton,
                  {
                    backgroundColor: this.props.setDetails.completed
                      ? COLOR_1
                      : COLOR_2
                  }
                ]}
              >
                <Text style={styles.circleButtonText}>
                  {this.props.setNumber}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.setInfo}>
              <Icon type="MaterialIcons" name="repeat" />
              <Text> Reps: {this.props.setDetails.reps}</Text>
            </View>
            <View style={styles.setInfo}>
              <Icon type="MaterialCommunityIcons" name="dumbbell" />
              <Text> Weight: {this.props.setDetails.weight}</Text>
            </View>
          </Card>
        </Swipeable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  setStyle: {
    flexDirection: "row",
    padding: 20
  },
  setInfo: {
    flexDirection: "row",
    padding: 10
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  circleButtonText: {
    fontSize: 20
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

function mapStateToProps(state) {
  return {
    state: state,
    selectedWorkout: state.workout.selectedWorkout
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeSetCompletionStatus: workoutActions.changeSetCompletionStatus,
      editSet: workoutActions.editSet,
      deleteSet: workoutActions.deleteSet
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SetContainer);
