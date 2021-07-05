import React, {useState} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {styles} from './styles'

import { Profile } from '../../componentes/Profile';
import { ButtonAdd } from '../../componentes/ButtonAdd';


export function Home(){
  return(
      <View>
        <View style={styles.header}> 
          <Profile />
          <ButtonAdd />
        </View>

      </View>
  );
}