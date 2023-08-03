import React from 'react';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <div
        className="bodyPart-card"
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({top:1800,left:100,behavior:"smooth"})
        }}
    >
        <h3
          className="bodyPart-name"
        >
          {item}
        </h3>
    </div>
  )
}

export default BodyPart