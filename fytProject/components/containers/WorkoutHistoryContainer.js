import React from 'react';
import { connect } from 'react-redux';
import {View} from 'react-native';
import WorkoutHistoryList from '../WorkoutHistory/WorkoutHistoryList';

const listOfWorkouts = {
    "November 5th, 2018" : {
      "Squat": {
        1 : {
          reps: 10,
          weight: 100
        },
        2 : {
          reps: 10,
          weight: 100
        },
        3: {
          reps: 12,
          weight: 300
        }
      },
      "Bench": {
        1 : {
          reps: 10,
          weight: 100
        },
        2 : {
          reps: 10,
          weight: 100
        },
        3: {
          reps: 12,
          weight: 300
        }
      }

    },
    "December 3rd, 2018": {
      "Bicep Curls": {
        1 : {
          reps: 10,
          weight: 100
        },
        2 : {
          reps: 10,
          weight: 100
        },
        3: {
          reps: 12,
          weight: 300
        }
      },
      "Bench": {
        1 : {
          reps: 10,
          weight: 100
        },
        2 : {
          reps: 10,
          weight: 100
        },
        3: {
          reps: 12,
          weight: 300
        }
      },
      "Deadlift": {
        1 : {
          reps: 10,
          weight: 100
        },
        2 : {
          reps: 10,
          weight: 100
        },
        3: {
          reps: 12,
          weight: 300
        }

      }

    },
    "December 12th, 2018": {
      "Leg Lifts": {
        1 : {
          reps: 10,
          weight: 100
        },
        2 : {
          reps: 10,
          weight: 100
        },
        3: {
          reps: 12,
          weight: 300
        }
      }

    }

}

class WorkoutHistoryContainer extends React.Component{

  render(){
    return(
    <View>
    <WorkoutHistoryList listOfWorkouts={listOfWorkouts}/>
    </View>
  );
  }
}

function mapStateToProps(state){
  return { workout: state.workout
  };
}

export default connect(mapStateToProps, null)(WorkoutHistoryContainer);
