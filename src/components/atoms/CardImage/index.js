import React from 'react';
import './index.css';
import cartaz from '../../../../assets/image22.png';

export const CardImage = (props) => {

  return (
    <div >
      <img src={cartaz} className={props.size === 'medium' ? 'image-medium' : 'image-small'}>
      </img>
    </div>
  );
}

export default CardImage