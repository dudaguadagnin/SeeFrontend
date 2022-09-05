import React from 'react';
import './index.css'

export const CardTitle = (props) => {

  return (
    <div className='cardtitle'>
      <span className='card-text'>
        {props.children}
        </span>
    </div>
  );
}

export default CardTitle;