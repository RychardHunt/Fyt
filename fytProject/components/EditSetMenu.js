import React from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import t from 'tcomb-form-native';
const Form = t.form.Form;


// * reps: The number of reps the user wants for this set (to be inputted by user)
// *  weight: The amount of weight the user wants to do for this set (to be inputted by user)
const setInformation = t.struct({
  reps: t.maybe(t.Number),
  weight: t.maybe(t.Number)
});


class EditSetMenu extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalVisible: this.props.modalVisible,
      displayModal: this.props.displayModal
    }
  }
  handleFormSubmit= () => {
    const formInput = this.formRef.getValue();
  }
  render() {
    return (
      <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
            this.state.displayModal();
            return true;
        }}>
        <Form ref={ref => this.formRef = ref} type={setInformation} value={{reps: this.props.reps, weight: this.props.weight}}/>
        <Button
          title="Enter"
          onPress={this.handleFormSubmit}/>
    </Modal>

      </View>
    );
  }
}


const styles = StyleSheet.create({


});
export default EditSetMenu;
