import React from 'react';
import Home from './src/components/organisms/Home';
import InfoMidia from './src/components/organisms/InfoMidia';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoPlayer from './src/components/organisms/VideoPlayer';


export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}} />
          <Stack.Screen 
            name="Player" 
            component={VideoPlayer} 
            options={{ headerShown: false}} />
        <Stack.Screen 
            name="InfoMidia" 
            component={InfoMidia} 
            options={{ headerShown: false}} />
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
