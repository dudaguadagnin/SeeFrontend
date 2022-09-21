import React from 'react';
import Videoks from '../../molecules/Videoks';
import { View } from 'react-native-web';
import GenericText from '../../atoms/GenericText';
import Seta from '../../../../assets/seta.png'
import {
  useLocation,
  Link
} from "react-router-dom";

export const VideoPlayer = (props) => {
  const [Height, setHeight] = React.useState(window.screen.height)
  const [Width, setWidth] = React.useState(window.screen.width)

  const playerRef = React.useRef(null);
  
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    // responsive: true,
    // fluid: true,
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

  const location = useLocation()

  return (
    <View >
      <div style={{zIndex:9, position: 'absolute',display: 'flex', justifyContent: 'flex-start', top: '12px'}}>
      <Link style={{padding: '4px 8px 5px'}} to="/Home">
        <img style={{width: '25px', height: '25px'}} src={Seta} />
        </Link>
        <GenericText size="medium" color="white">{location.state}</GenericText>
      </div>
      
      <div className='video-player'>
        <Videoks options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
    </View>
  );
}

export default VideoPlayer;

