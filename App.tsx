import React from 'react';
import {Routes} from './src/routes';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { Background } from './src/componentes/background';
import {AuthProvider} from './src/hooks/auth'


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
    <Background> 
      <StatusBar 
        barStyle = "light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
         <Routes />
      </AuthProvider>
      </Background>
  );
}