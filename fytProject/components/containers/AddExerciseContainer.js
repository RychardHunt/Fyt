import React from 'react';
import {bindActionCreators} from 'redux';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {addExercise} from '../../actions/WorkoutActions';
import AddExerciseMenu from '../workoutList/AddExerciseMenu';

class AddExerciseContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false
    }
  }

  handleFormSubmit = (formData) => {
    this.props.addExercise(formData.exerciseName);
  }

  toggleExerciseMenuFunction = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    });
  }

  render() {

    return (<View>
      <AddExerciseMenu menuVisible={this.state.menuVisible}
                       toggleExerciseMenuFunction={this.toggleExerciseMenuFunction}
                       handleFormSubmit={this.handleFormSubmit}/>

    </View>);
  }
}

function mapStateToProps(state) {
  return {workout: state.workout};
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addExercise: addExercise
  }, dispatch);

}
export default connect(mapStateToProps, matchDispatchToProps)(AddExerciseContainer);
