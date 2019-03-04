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
import { COLOR_1, COLOR_2 } from "../../config/settings";

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
  }
});

class SetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completionButtonColor: COLOR_2,
      modalVisible: false
    };
  }

  changeSetCompletionStatus = (exercise, setNumber) => {
    if (this.state.completionButtonColor == COLOR_1) {
      this.setState({
        completionButtonColor: COLOR_2
      });
    } else {
      this.setState({
        completionButtonColor: COLOR_1
      });
    }
    this.props.changeSetCompletionStatus(exercise, setNumber);
  };
  handleFormSubmit = formInput => {
    this.props.editSet(
      this.props.exerciseName,
      this.props.setNumber,
      formInput.reps,
      formInput.weight
    );
  };

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };
  render() {
    return (
      <View>
        <EditSetMenu
          modalVisible={this.state.modalVisible}
          setNumber={this.props.setNumber}
          exerciseName={this.props.exerciseName}
          weight={this.props.setDetails.weight}
          reps={this.props.setDetails.reps}
          editSetFunction={this.handleFormSubmit}
          toggleModalFunction={this.toggleModal}
        />
        <TouchableOpacity
          onPress={() => {
            this.toggleModal()
          }}
        >
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
                  { backgroundColor: this.state.completionButtonColor }
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
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { workout: state.workout };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { changeSetCompletionStatus: workoutActions.changeSetCompletionStatus, editSet: workoutActions.editSet },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SetContainer);
