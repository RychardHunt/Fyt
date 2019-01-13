import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import WorkoutList from '../workoutList/WorkoutList.js';
import {calculateWorkoutProgress, numberOfSetsInExercise} from '../../config/utilities.js';

import {editSet, changeSetCompletionStatus, addSet} from '../../actions/WorkoutActions';

class WorkoutContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      setMenuVisible: false
    }
  }

  addSet= (exercise, exerciseName) => {
    const setNumber = numberOfSetsInExercise(this.props.workout[exerciseName])+1;
    this.props.addSet(exerciseName, setNumber, exercise.reps, exercise.weight);
  }

  toggleSetMenuVisibility = () => {
    this.setState({
      setMenuVisible: !this.state.setMenuVisible
    });
  }


  render(){
    let workoutProgress = calculateWorkoutProgress(this.props.workout);
    return(
      <WorkoutList workoutProgress={workoutProgress}
                   workout={this.props.workout}
                   toggleSetMenuVisibilityFunction={this.toggleSetMenuVisibility}
                   setMenuVisible={this.state.setMenuVisible}
                   addSetFunction={this.addSet}/>
  );
  }

}

function mapStateToProps(state){
  return { workout: state.workout
  };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({editSet: editSet,
                              changeSetCompletionStatus: changeSetCompletionStatus,
                              addSet: addSet},
                              dispatch);

}
export default connect(mapStateToProps, matchDispatchToProps)(WorkoutContainer);
