import React from 'react';
import Home from './src/components/organisms/Home';
import InfoMidia from './src/components/organisms/InfoMidia';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from './src/components/molecules/Card';
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
import Error from './src/components/organisms/Erro';
import Duvidas from './src/components/organisms/Duvidas/index.js';
import RespostaDuvida from './src/components/organisms/RespostaDuvida/index.js';
import Login from './src/components/organisms/Login';
import Cadastro from './src/components/organisms/Cadastro';
import Favoritos from './src/components/organisms/Favoritos';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Favoritos" element={<Favoritos />} />
          <Route path="/Filmes" element={<Genero />} />
          <Route path="/Series" element={<Genero />} />
          <Route path="/Player" element={<VideoPlayer />}/>
          <Route path="/InfoMidia" element={<InfoMidia />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/Duvidas" element={<Duvidas />} />
          <Route path='/Resposta' element={<RespostaDuvida />}/>
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
          <Route path="/terror" element={<Genero />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />

        </Routes>
      </BrowserRouter>
    </Provider>
    
  )


}
