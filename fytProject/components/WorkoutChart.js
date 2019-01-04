import React from 'react';
import PureChart from 'react-native-pure-chart';

class WorkoutList extends React.Component {

  render() {
 let sampleData = [
      {x: '2018-01-01', y: 30},
      {x: '2018-01-02', y: 200},
      {x: '2018-01-03', y: 170},
      {x: '2018-01-04', y: 250},
      {x: '2018-01-05', y: 10}
  ];
    return (
<PureChart data={sampleData} type='line' />    );
  }
}



