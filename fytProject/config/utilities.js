
export const isWorkoutComplete = (workout) =>{

  let exercises = Object.values(workout);
  return exercises.every(exercise => isExerciseComplete(exercise));

}
export const isExerciseComplete = (exercise) => {
  let sets = Object.values(exercise);
  let areAllSetsComplete = sets.every(set => set.completed);
  return areAllSetsComplete;
}

export const numberOfSetsInExercise = (exercise) => {
  return Object.values(exercise).length;
}


export const calculateWorkoutProgress = (workout) => {
  let totalSets = 0;
  let completedSets = 0;
  let exercises = Object.values(workout);
  for(const exercise of exercises){
    for(const set in exercise){
      if(exercise[set].completed){
        completedSets+=1;
      }
      totalSets+=1;
    }
  }
  return (completedSets/totalSets)*100;

}
