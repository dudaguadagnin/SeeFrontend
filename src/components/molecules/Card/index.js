import React from 'react';
import CardTitle from '../../atoms/CardTitle';
import GenericText from '../../atoms/GenericText';
import CardImage from '../../atoms/CardImage';
import Star from '../../atoms/Star';
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export const Card = (props) => {


  return (

    <div>
      <Link className='link-card' to="/InfoMidia" state={{ props: props.item, filme: true }}>
        <div className='card' >
          <div className='card-body-image'>
            <CardImage cartaz={props.item.image} size="medium" />
          </div>
          <div className='card-body-title'>
            <CardTitle>{props.item.title}</CardTitle>
          </div>
          {
            props.item.duration ?
              <div className='card-body-info'>
                <GenericText size="small" color="gray">{props.item.duration}</GenericText>
              </div>
              : <div className='card-body-info'>
                <GenericText size="small" color="gray">{props.item.season_quantity}</GenericText>
                <GenericText size="small" color="gray"> Temps.</GenericText>
              </div>
          }

        </div>
      </Link>
    </div>
  );
}

export default Card;