import React from 'react';
import './index.css';
import star from '../../../../assets/star.png';

export const Star = (props) => {

  return (
    <div >
      <img className={props.pequena ? 'classPequena' : 'classMedia'} src={star} height="340"></img>
    </div>
  );
}

export default Star