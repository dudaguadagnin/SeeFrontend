import React from 'react';
import CardTitle from '../CardTitle';
import GenericText from '../GenericText';
import CardImage from '../CardImage';
import Star from '../Star';
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route, 
  Link
} from "react-router-dom";

export const Card = (props) => {
console.log(props)

  return (
    <div> 
      {/* <Link className='link-card' to="/InfoMidia" state={{props: props.item, filme:true}}>
    <div className='card' >
      <div className='card-body-image'>
        <CardImage cartaz={props.item.image} size="medium" />
      </div>
      <div className='card-body-title'>
        <CardTitle>{props.item.title}</CardTitle>
      </div>
      <div className='card-body-info'>
        <GenericText size="small" color="gray">{props.item.duration? props.item.duration : props.item.episodeDuration}</GenericText>
      </div>
    </div>
    </Link> */}
    </div>
  );
}

export default Card;