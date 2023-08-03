import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <div className="exercise-card-content">
            <button className="btn btn-part">
                {exercise.bodyPart}
            </button>
            <button className="btn btn-target">
                {exercise.target}
            </button>
        </div>
        <h4 className="exercise-card-name">
            {exercise.name}
        </h4>
    </Link>
  )
}

export default ExerciseCard