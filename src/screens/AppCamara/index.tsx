import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Modal, Image} from 'react-native';
import {styles} from './styles'
import { Background } from '../../componentes/background';
import  { useState, useEffect, useRef } from 'react';

import { Camera } from 'expo-camera';
import {FontAwesome} from "@expo/vector-icons"

import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

export default function AppCamera() {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status ==='granted');
      console.log(status);
      
    })();
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status ==='granted');
      
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Acesso negado à camera</Text>;
  }
  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  }
  async function savePicuture() {
    const asset = await MediaLibrary.createAssetAsync(capturedPhoto).then(() =>{
      alert('salvo com sucesso');
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <Background> 
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type}
      ref={camRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
              <FontAwesome name="exchange" size={23} color="red" > 
              </FontAwesome>
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCamera} onPress={takePicture}>
            <FontAwesome name="camera" size={23} color="#fff"></FontAwesome>
          </TouchableOpacity>
          {
            capturedPhoto && 
            <Modal animationType='slide'
            transparent={false}
            visible={open}
             > 
              <View style={styles.modal}>
                <View style={{margin: 10, flexDirection:'row'}} >
                <TouchableOpacity style={{margin: 10}}>
                    <FontAwesome 
                    name="upload" 
                    size={50} 
                    color="#121212"
                    onPress={savePicuture} >

                    </FontAwesome>
                  </TouchableOpacity>
                  <TouchableOpacity style={{margin: 10}}>
                    <FontAwesome 
                    name="window-close" 
                    size={50} 
                    color="red"
                    onPress={()=>setOpen(false)} >

                    </FontAwesome>
                  </TouchableOpacity>
                </View>
                < Image
                source={{uri: capturedPhoto}}
                style={{width:'100%', height:300, borderRadius: 20}}
                  
                />

              </View>
            </Modal>
          }
        </View>
      </Camera>
    </SafeAreaView>
    </Background>
  );
}
