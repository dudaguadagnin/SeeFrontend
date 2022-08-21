import React from 'react';
import './index.css'


export const GenericText = (props) => {
    // colors = gray || black || white
    // size = small || medium || large

  return (
    <div className='generic-text'>
       <span className={`text-color-${props.color} text-size-${props.size}`}>{props.children}</span>
    </div>
  );
}

export default GenericText;