import React from 'react';
import './index.css';

export const GenreIcon = (props) => {

  return (
    <div className='genre-icon-corpo'><div className='genreIcon'>{props.children}</div></div>
    
  );
}

export default GenreIcon