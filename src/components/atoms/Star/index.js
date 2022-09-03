import React from 'react';
import './index.css';
import star from '../../../../assets/star.png';
import starwhite from '../../../../assets/startwhite.png';

export const Star = (props) => {
  // size = pequena|| media(default) 
  // color = white || yellow(default)
  return (
    <div >
      <img className={props.size === 'pequena' ? `class-pequena`: `class-media` } src={props.color === 'white'? starwhite : star} height="340"></img>
    </div>
  );
}

export default Star