import React, {useState} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {styles} from './styles'

import { Profile } from '../../componentes/Profile';


export function Home(){
  return(
      <View>
        <View style={styles.header}> 
          <Profile />
        </View>

      </View>
  );
}