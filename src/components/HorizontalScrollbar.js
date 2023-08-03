import React, {useContext} from 'react';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <div className="body-parts-wrapper">
      {
            data.map((item) => (
                <div
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                >
                    {isBodyParts ? 
                    <BodyPart 
                        item={item} 
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
                    /> : 
                    <ExerciseCard exercise={item} />}
                </div>
            ))
        }
    </div>
  )
}

export default HorizontalScrollbar