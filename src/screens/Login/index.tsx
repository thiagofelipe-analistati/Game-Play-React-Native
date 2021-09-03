import React, { useEffect, useState } from 'react';
import {View, Text, TextInput ,Image, StatusBar, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';
import {styles} from './styles'


import { Background } from '../../componentes/background';
import {useAuth} from '../../hooks/auth';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebase/api';




export function Login({}){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErroLogin] = useState('');
  const navigation = useNavigation();

  const {user, signIn} = useAuth();

 useEffect(()=>{

 },[]);

 function handleNewUser(){
  navigation.navigate("NewUser");
}
 function LoginFirebase(){
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    navigation.navigate("Home");
    // ...
  })
  .catch((error) => {
    setErroLogin("true")
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}
  return(
    <Background> 
    <KeyboardAvoidingView
     style={styles.container}
     behavior={Platform.OS ==="ios"? "padding" : "height"}
     >
      <StatusBar 
        barStyle = "light-content"
        backgroundColor="transparent"
        translucent
      />
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
                  placeholder="Entre com a senha"
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  value={password} />
                  {
                    errorLogin === "true"
                    ?
                    <View style={styles.contentAlert}> 
                      <MaterialCommunityIcons 
                        name= 'alert-circle'
                        size={20}
                        color="#bdbdbd"
                      />

                      <Text style={styles.alert}> Email ou senha inválido </Text>
                    </View>
                    :
                    <View/>
                  }
                  {
                    email === "" || password === ""
                    ?
                      <TouchableOpacity 
                        disabled={true}
                        style={styles.button}
                        
                      >
                        <Text style={styles.textbutton} > Entrar </Text>
                      </TouchableOpacity>
                    :
                    <TouchableOpacity

                        style={styles.button}
                        onPress={LoginFirebase}
                      >
                        <Text style={styles.textbutton} > Entrar </Text>
                      </TouchableOpacity>
                  }
             
        </View>
    

        <Text style={styles.registar}>
          não tem Cadastro?
          <Text 
            style ={styles.linksubscribe}
            onPress={handleNewUser}
          >
            registre-se agora
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
    </Background>

  )
}

function password(email: string, password: any) {
  throw new Error('Function not implemented.');
}
