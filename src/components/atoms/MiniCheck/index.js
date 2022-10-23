import React from 'react';
import './index.css';
import Check from '../../../../assets/check-gray.svg'

export const MiniCheck = (props) => {

  return (
    <div >
      <img src={Check} className={`mini-check-${props.size} mini-check-${props.color}`}>
      </img>
    </div>
  );
}

export default MiniCheck