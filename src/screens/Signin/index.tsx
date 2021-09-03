import React, { useEffect, useState } from 'react';
import {View, Text, TextInput ,Image, StatusBar, KeyboardAvoidingView} from 'react-native';
import {styles} from './styles'
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../componentes/buttonIcon';
import { Background } from '../../componentes/background';
import {useAuth} from '../../hooks/auth';
import { Alert } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'


import { Smallinput } from '../../componentes/Smallinput';
export function Signin(){

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorLogin, setErroLogin] = useState("");

  const {user, signIn} = useAuth();

   function LoginFirebase(){
    try {
       signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }
 useEffect(()=>{

 },[]);

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
        <View > 
          
                <TextInput 
                 style={[styles.imput, {marginBottom: 12}]}
                  placeholder="Entre com o email"
                  onChangeText={(text) => setEmail(text)}
                  secureTextEntry={true}
                  keyboardType="email-address"
                  value={email}
                />

            <TextInput 
                  style={[styles.imput, {marginBottom: 20 }]}
                  secureTextEntry={true}
                  placeholder="Entre com a senha"
                  keyboardType="visible-password"
                  onChangeText={(text) => setSenha(text)}
                  value={senha} />
          
                  
        </View>
        <ButtonIcon 
        title="Entrar com discord" 
    
        onPress={LoginFirebase} />
      </View>
    </View>
    </Background>

  )
}