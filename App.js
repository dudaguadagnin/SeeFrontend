import React from 'react';
import Home from './src/components/organisms/Home';
import InfoMidia from './src/components/organisms/InfoMidia';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from './src/components/molecules/Card';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoPlayer from './src/components/organisms/VideoPlayer';

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



  return (
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
    </NavigationContainer>
  )

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
