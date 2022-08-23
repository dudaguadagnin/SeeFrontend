import React from 'react';
import Videoks from '../../molecules/Videoks';

export const VideoPlayer = (props) => {

    const playerRef = React.useRef(null);

    const videoJsOptions = {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: '//vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4'
      },
      { src: "https://www.w3schools.com/html/horse.ogg", type: "audio/ogg" }
      ]
    };
    
    const handlePlayerReady = (player) => {
      playerRef.current = player;
    
      // You can handle player events here, for example:
      player.on('waiting', () => {
        videojs.log('player is waiting');
      });
    
      player.on('dispose', () => {
        videojs.log('player will dispose');
      });
    };
    


  return (
    <div className='video-player'>
      <Videoks options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default VideoPlayer;

