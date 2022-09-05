import React from 'react';
import './index.css';
import cartaz from '../../../../assets/image22.png';

export const CardImage = (props) => {

  return (
    <div >
      <img src={props.cartaz} className={`image-${props.size}`}>
      </img>
    </div>
  );
}

export default CardImage