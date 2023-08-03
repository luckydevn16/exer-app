import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import DotsImage from '../assets/svg/Dots.svg';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({top:1800,behavior:"smooth"})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }

      setExercises(exercisesData);
    }
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div id="exercises" className="exercises-section">
      <h3 className="exercises-heading section-heading">
        Showing Results
      </h3>
      <div className="exercise-content container">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard 
            key={index}
            exercise={exercise}
          />
        ))}
      </div>
      <div>
          {exercises.length > 12 && (
            <Pagination 
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
      </div>
      <img src={DotsImage} alt="banner" className="exercises-dots-img" />
    </div>
  )
}

export default Exercises