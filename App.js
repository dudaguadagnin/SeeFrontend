import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Videoks from './src/components/organisms/Videoks';
import VideoTeste from './assets/videoteste.mp4'
import Home from './src/Templates/Home';

export default function App() {

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
  {src:"https://www.w3schools.com/html/horse.ogg", type:"audio/ogg" }
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
    <View style={styles.container}>
      {/* <Videoks options={videoJsOptions} onReady={handlePlayerReady} /> */}
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12142B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
