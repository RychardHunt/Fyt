import React from 'react';

import { StyleSheet, Text, View, Modal, BackHandler } from 'react-native';

class EditSetMenu extends React.Component {

  constructor(props){
    super(props);
    console.log("Is the constructor getting triggered");
    this.state = {
      modalVisible: this.props.modalVisible,
      displayModal: this.props.displayModal
    }
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
        <Text> Hope you like this modal </Text>
      </Modal>

      </View>
    );
  }
}


const styles = StyleSheet.create({


});
export default EditSetMenu;
