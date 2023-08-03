import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <div className="similar-exercises container">
      <h3 className="similar-exercises-heading section-heading">
        Exercises that target the same muscle group
      </h3>
      <div className="similar-exercises-content">
        {targetMuscleExercises.length ? 
        <HorizontalScrollbar data={targetMuscleExercises} /> :
        <Loader/>}
      </div>

      <h3 className="similar-exercises-heading">
        Exercises that use the same equipment
      </h3>
      <div className="similar-exercises-content">
        {equipmentExercises.length ? 
        <HorizontalScrollbar data={equipmentExercises} /> :
        <Loader/>}
      </div>
    </div>
  )
}

export default SimilarExercises