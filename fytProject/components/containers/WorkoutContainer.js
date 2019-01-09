import React from 'react';
import {bindActionCreators} from 'redux';
import {View} from 'react-native';
import { connect } from 'react-redux';
import WorkoutList from '../WorkoutList.js';
import {calculateWorkoutProgress} from '../../config/utilities.js';

import {editSet, changeSetCompletionStatus} from '../../actions/WorkoutActions';

class WorkoutContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      addSetMenuVisibility: false
    }
  }

  addSet= (exerciseName, reps, weight) => {
    this.props.addSet(exerciseName, reps, weight);
  }

  toggleSetMenuVisibility = () => {
    this.setState({
      addSetMenuVisibility : ! addSetMenuVisibility
    });
  }




  render(){
    let workoutProgress = calculateWorkoutProgress(this.props.workout);
    return(
      <WorkoutList workoutProgress={workoutProgress}
                   workout={this.props.workout}
                   addSetMenuVisibility={false}
                   toggleSetMenuVisibilityFunction={toggleSetMenuVisibility}
                   addSetFunction={addSet}/>
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
