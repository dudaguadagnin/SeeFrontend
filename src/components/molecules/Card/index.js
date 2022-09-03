import React from 'react';
import CardTitle from '../../atoms/CardTitle';
import GenericText from '../../atoms/GenericText';
import CardImage from '../../atoms/CardImage';
import Star from '../../atoms/Star';
import './index.css'


export const Card = (props) => {
  console.log(props)
  return (
    <div className='card'>
      <div className='card-body-image'>
        <CardImage cartaz={props.item.cartaz} size="medium"/>
      </div>
      <div className='card-body-title'>
        <CardTitle>{props.item.title}</CardTitle>
      </div>
      <div className='card-body-info'>
        <div className='card-info-avaliate'>
          <Star size="pequena" />
          <GenericText size="small" color="gray">{props.item.evaluation}</GenericText>
        </div>
        <div className='card-body-time'></div>
        <GenericText size="small" color="gray">{props.item.duration}</GenericText>
      </div>


    </div>
  );
}

export default Card;