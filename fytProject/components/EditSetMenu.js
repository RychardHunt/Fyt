import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Modal, Button } from "react-native";
import t from "tcomb-form-native";
import { editSet } from "../actions/WorkoutActions";

const Form = t.form.Form;

// * reps: The number of reps the user wants for this set (to be inputted by user)
// *  weight: The amount of weight the user wants to do for this set (to be inputted by user)
const setInformation = t.struct({
  reps: t.maybe(t.Number),
  weight: t.maybe(t.Number)
});

class EditSetMenu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            this.props.toggleModalFunction();
            return true;
          }}
        >
          <Form
            ref={ref => (this.formRef = ref)}
            type={setInformation}
            value={{ reps: this.props.reps, weight: this.props.weight }}
          />
          <Button
            title="Enter"
            onPress={() => {
              this.props.editSetFunction(this.formRef.getValue());
              this.props.toggleModalFunction();
              return true;
            }}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

function mapStateToProps(state) {
  return state;
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ editSet: editSet }, dispatch);
}
export default connect(
  null,
  matchDispatchToProps
)(EditSetMenu);
