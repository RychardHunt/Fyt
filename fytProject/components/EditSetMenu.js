import React from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import t from 'tcomb-form-native';
const Form = t.form.Form;

const setInformation = t.struct({
  reps: t.maybe(t.Number),
  weight: t.maybe(t.Number)
});


class EditSetMenu extends React.Component {

  constructor(props){
    super(props);
    console.log("Is the constructor getting triggered");
    this.state = {
      modalVisible: this.props.modalVisible,
      displayModal: this.props.displayModal
    }
  }
  handleFormSubmit= () => {
    const formInput = this.formRef.getValue();
  }
  render() {
    console.log("Ok so " + this.props.modalVisible);
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
