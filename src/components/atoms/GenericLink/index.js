import React from 'react';
import GenericText from '../GenericText';
import './index.css'


export const GenericLink = (props) => {
    // color = gray || black || white
    // size = small || medium || large || subtitlebold
    // bold = bold
  return (
    <div className='generic-link'>
       <a href={props.href} className={[`generic-link-color-${props.color} `,  props.line ? ' generic-link-line' : ' generic-link-no-line']}>
        <GenericText color={props.color} size={props.size}>
        {props.children}
        </GenericText>
        </a>
    </div>
  );
}

export default GenericLink;