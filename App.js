import React from 'react';
import Home from './src/components/organisms/Home';
import InfoMidia from './src/components/organisms/InfoMidia';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from './src/components/molecules/Filmes/Card';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoPlayer from './src/components/organisms/VideoPlayer';
import { View } from 'react-native-web';

//import { NativeRouter, Route, Link } from "react-router-native";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Genero from './src/components/organisms/Genero';
import { Provider } from 'react-redux';
import store from './src/store/index.js';

export default function App() {
  return (
    
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
        
          <Route exact path="/Home" element={<Home />} />
         
          <Route path="/Filmes" element={<Genero />} />
          <Route path="/Series" element={<Genero />} />
          <Route path="/Player" element={<VideoPlayer />}/>
          <Route path="/InfoMidia" element={<InfoMidia />} />
          <Route path="/acao" element={<Genero />} />
          <Route path="/aventura" element={<Genero />} />
          <Route path="/comedia" element={<Genero />} />
          <Route path="/drama" element={<Genero />} />
          <Route path="/espionagem" element={<Genero />} />
          <Route path="/fantasia" element={<Genero />} />
          <Route path="/ficcao" element={<Genero />} />
          <Route path="/guerra" element={<Genero />} />
          <Route path="/romance" element={<Genero />} />
          <Route path="/suspense" element={<Genero />} />
          <Route path="/terror" element={<Genero />} />

        </Routes>
      </BrowserRouter>
    </Provider>
    
  )


}
