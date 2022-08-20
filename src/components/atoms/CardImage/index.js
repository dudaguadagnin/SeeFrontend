import React from 'react';
import './index.css';
import cartaz from '../../../../assets/spiderman.jpg';

export const CardImage = (props) => {

  return (
    <div >
      <img src={cartaz} height="340">
      </img>
    </div>
  );
}

export default CardImage