import React, {useState} from 'react';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);

  return (
    <div>
        <HeroBanner />
        <SearchExercises 
          setExercises={setExercises} 
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises 
          exercises={exercises}
          setExercises={setExercises} 
          bodyPart={bodyPart}
        />
    </div>
  )
}

export default Home