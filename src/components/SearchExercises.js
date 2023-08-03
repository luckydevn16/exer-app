import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);

      console.log(bodyPartsData);
    }

    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <div className="search-section">
        <div className="container">
            <h3 className="section-heading">
                Awesome Exercises You <br/> Should Know
            </h3>
            <div className="search-wrapper">
              <input 
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type="text"
              />
              <button 
                className="search-btn btn primary"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div className="scrollbar-wrapper">
                <HorizontalScrollbar 
                  data={bodyParts} 
                  bodyPart={bodyPart}
                  setBodyPart={setBodyPart}
                  isBodyParts
                />
            </div>
        </div>
        <div className="search-decor first"></div>
        <div className="search-decor second"></div>
    </div>
  )
}

export default SearchExercises