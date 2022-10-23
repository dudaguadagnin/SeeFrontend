import React from 'react';
import './index.css'


export const GenericText = (props) => {
    // color = gray || black || white || green || red
    // size = small || medium || large || subtitlebold
    // bold = bold

  return (
    <div className='generic-text'>
       <span className={`text-color-${props.color} text-size-${props.size}  text-bold-${props.bold}`}>{props.children}</span>
    </div>
  );
}

export default GenericText;