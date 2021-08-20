import React, {useState} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {styles} from './styles'
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../componentes/buttonIcon';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../componentes/background';

export function Signin(){

  const navigation = useNavigation();

  function handleSignin(){
    navigation.navigate('Home');
  }

  return(
    <Background> 
    <View style={styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image 
      source={IllustrationImg} 
      style={styles.image}
      resizeMode = "stretch" />
      <View style={styles.content}>
        <Text style={styles.title}> 
         Conecte-se {`\n`} e  Organize suas jogatinas
        </Text>
        <Text style={styles.subTitle}>
           Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
        </Text>
        <ButtonIcon 
        title="Entrar com discord" 
    
        onPress={handleSignin} />
      </View>
    </View>
    </Background>

  )
}