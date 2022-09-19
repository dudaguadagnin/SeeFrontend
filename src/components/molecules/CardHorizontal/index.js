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
  Link,
  useLocation
} from "react-router-dom";
//import { useNavigation } from '@react-navigation/native';

const CardHorizontal = (props) => {
  // console.log(props)
  return (
    <div>
      <Link className='link-card' to="/Player" state={{ play: props.item }}>
        <div className='card-horizontal' >
          <div className='card-horizontal-body-image'>
            <CardImage cartaz={props.item.image} size="horizontal" />
          </div>
          <div className='card-horizontal-body-title'>
            <CardTitle>{props.item.title}</CardTitle>
          </div>
          <div className='card-horizontal-body-info'>
            <div className='card-horizontal-body-time'></div>
            <GenericText size="small" color="gray">{props.item.duration}</GenericText>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default CardHorizontal