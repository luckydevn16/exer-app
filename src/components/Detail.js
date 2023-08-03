import React from 'react';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    },
  ]

  return (
    <div 
      className="detail-wrapper"
    >
      <div className="container flex center">
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <div className="detail-content">
          <h4 className="detail-name">
            {name}
          </h4>
          <h6 className="detail-descr">
            Exercises keep you strong.{' '}  
            {name} {' '} is one of the best exercises to target your {target}.
            It will help you improve your mood and gain energy.
          </h6>
          <div className="detail-props flex">
            {extraDetail?.map((item) => (
              <div key={item.name} className="detail-item">
                <button className="btn">
                  <img src={item.icon} alt={item.name} style={{width:'50px',height:'50px'}} />
                </button>
                <h5 className="detail-item-name">
                  {item.name}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail