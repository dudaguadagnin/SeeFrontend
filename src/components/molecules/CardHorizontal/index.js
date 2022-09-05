import React from 'react';
import CardTitle from '../../atoms/CardTitle';
import GenericText from '../../atoms/GenericText';
import CardImage from '../../atoms/CardImage';
import Star from '../../atoms/Star';
import './index.css'

const CardHorizontal = (props) => {
  console.log('hirizontal', props)
  return (
    <div className='card-horizontal'>
      <div className='card-horizontal-body-image'>
        <CardImage cartaz={props.item.cartaz} size="horizontal"/>
      </div>
      <div className='card-horizontal-body-title'>
        <CardTitle>{props.item.title}</CardTitle>
      </div>
      <div className='card-horizontal-body-info'>
        <div className='card-horizontal-body-time'></div>
        <GenericText size="small" color="gray">{props.item.duration}</GenericText>
      </div>
    </div>
  );
}
export default CardHorizontal