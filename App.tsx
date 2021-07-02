import React from 'react';
import {Signin} from './src/screens/Signin';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';


export default function App(){

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_700Bold,
    Rajdhani_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return(
   <Signin />

  );
}