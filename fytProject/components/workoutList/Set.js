import React from 'react';
import EditSetMenu from './EditSetMenu';
import {Container, Card, Content, Icon} from 'native-base';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({

  setStyle : {
    flexDirection : 'row',
    padding: 20
  },
  setInfo : {
    flexDirection: 'row',
    padding: 10
  },
  circleButton : {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems : 'center',
    justifyContent: 'center'
  },
  circleButtonText : {
    fontSize: 20
  }
});

// This Component represents a set during a work-out
class Set extends React.Component {

// * `setNumber` The {Number} set number of this set (1-n)
// * `reps` The {Number} number of reps to be doone during this set
// * `weight` The {Number} weight that is going to be done for this set
// * `editSet` A {Function} function that tells the component what to do when the user tries to edit the set

  render() {
    return (
      <View>
        <EditSetMenu modalVisible= {this.props.modalVisible}
                     exerciseName={this.props.exerciseName}
                     weight={this.props.setDetails.weight}
                     reps={this.props.setDetails.reps}
                     editSetFunction={this.props.editSetFunction}
                     toggleModalFunction={this.props.toggleModalFunction}/>
      <TouchableOpacity onPress={() => {this.props.toggleModalFunction()}}>
          <Card style={styles.setStyle}>
              <TouchableOpacity onPress={() => this.props.changeSetCompletionStatus(this.props.exerciseName, this.props.setNumber)}>
                  <View style={[styles.circleButton,{backgroundColor: this.props.completionButtonColor}]}>
                      <Text style={styles.circleButtonText}>{this.props.setNumber}
                      </Text>
                  </View>
              </TouchableOpacity>
              <View style={styles.setInfo}>
                 <Icon type="MaterialIcons" name="repeat"/>
                 <Text> Reps: {this.props.setDetails.reps}</Text>
              </View>
              <View style={styles.setInfo}>
                 <Icon type="MaterialCommunityIcons" name="dumbbell"/>
                 <Text> Weight: {this.props.setDetails.weight}</Text>
              </View>
          </Card>
    </TouchableOpacity>
    </View>
    );
  }
}

export default Set;
