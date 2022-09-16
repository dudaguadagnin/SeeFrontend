import React from 'react';
import Home from './src/components/organisms/Home';
import InfoMidia from './src/components/organisms/InfoMidia';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from './src/components/molecules/Card';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoPlayer from './src/components/organisms/VideoPlayer';
//import { NativeRouter, Route, Link } from "react-router-native";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Genero from './src/components/organisms/Genero';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';

const navigationRef = createNavigationContainerRef()

function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const generos = [
    {
      "name": "Ação"
    },
    {
      "name": "Aventura"
    },
    {
      "name": "Comédia"
    },
    {
      "name": "Drama"
    },
    {
      "name": "Espionagem"
    },
    {
      "name": "Fantasia"
    },
    {
      "name": "Ficção Científica"
    },
    {
      "name": "Guerra"
    },
    {
      "name": "Romance"
    },
    {
      "name": "Suspense"
    },
    {
      "name": "Terror"
    }
  ]


  return (
    
    <BrowserRouter>
    <Routes>
      <Route exact path="/Home" element={<Home />} />
      <Route path="/Filmes"  element={<Genero />} />
      <Route path="/Series"  element={<Genero />} />
      <Route path="/Player" element={<VideoPlayer />} />
      <Route path="/InfoMidia" element={<InfoMidia />} />
      <Route path="/acao"  element={<Genero />} />
      <Route path="/aventura"  element={<Genero />} />
      <Route path="/comedia"  element={<Genero />} />
      <Route path="/drama"  element={<Genero />} />
      <Route path="/espionagem"  element={<Genero />} />
      <Route path="/fantasia"  element={<Genero />} />
      <Route path="/ficcao"  element={<Genero />} />
      <Route path="/guerra"  element={<Genero />} />
      <Route path="/romance"  element={<Genero />} />
      <Route path="/suspense"  element={<Genero />} />
      <Route path="/terror"  element={<Genero />} />
      
    </Routes>
   </BrowserRouter>
  )
{/**
    <NavigationContainer ref={navigationRef}>

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Player"
          component={VideoPlayer}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="InfoMidia"
          component={InfoMidia}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Midia"
          component={''}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>*/}
  

  {/*
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={VideoPlayer} />
      </Tab.Navigator>
     
    </NavigationContainer>
  );*/}

}
