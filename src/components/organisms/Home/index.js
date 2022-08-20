import React from 'react';
import Card from '../../molecules/Card'
// import Star from './src/components/atoms/Star';
import { CardImage } from './src/components/atoms/CardImage';
import GenreIcon from './src/components/atoms/GenreIcon';

export const Home = (props) => {
  return (
    <div className='home'>
      {/* <Videoks options={videoJsOptions} onReady={handlePlayerReady} /> */}
      {/* <Star pequena/> */}
      {/* <CardImage /> */}
      {/* <GenreIcon /> */}
<GenreIcon />
    </div>
  );
}

export default Home;