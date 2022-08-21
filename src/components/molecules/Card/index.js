import React from 'react';
import CardTitle from '../../atoms/CardTitle';
import GenericText from '../../atoms/GenericText';
import CardImage from '../../atoms/CardImage';
import Star from '../../atoms/Star';
import './index.css'


export const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-body-image'>
        <CardImage size="medium"/>
      </div>
      <div className='card-body-title'>
        <CardTitle>Uma Dobra no</CardTitle>
      </div>
      <div className='card-body-info'>
        <div className='card-info-avaliate'>
          <Star pequena />
          <GenericText size="small" color="gray">4.5</GenericText>
        </div>
        <div className='card-body-time'></div>
        <GenericText size="small" color="gray">2h, 28min</GenericText>
      </div>


    </div>
  );
}

export default Card;