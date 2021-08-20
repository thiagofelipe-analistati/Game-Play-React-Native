
import React from 'react';
import {ImageBackground, Text, View,  FlatList} from 'react-native'
import { Background } from "../../componentes/background";
import {Header} from "../../componentes/Header";
import {BorderlessButton} from 'react-native-gesture-handler'
import {Fontisto} from '@expo/vector-icons'
import { theme } from '../../global/styles/them';
import BannerImg from '../../assets/banner.png'

import { styles } from './styles';
import { ListHeader } from '../../componentes/ListHeader';
import { Member } from '../../componentes/Member';
import { ListDivider } from '../../componentes/ListDivider';
import { ButtonIcon } from '../../componentes/buttonIcon';


export function AppointmentDetails(){
  const members = [
    {
      id : '1',
      username: 'Thiago',
      avatar_url: 'https://github.com/thiagofelipe-analistati.png',
      status: 'online'
    },
    {
      id : '2',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'offline'
    }
  ]
  return(
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
            name="share"
            size={24}
            color={theme.color.primary}/>
          </BorderlessButton>
        }

      />
      <ImageBackground
      source={BannerImg}
      style={styles.banner}
      > 
        <View style={styles.bannercontent}>
        <Text style={styles.title}> 
          Lendários
        </Text>
        <Text style={styles.subtitle}> 
          É hoje que vamos chegar ao challenger sem perder uma partida da md10
        </Text>
      </View>
      </ImageBackground>
      <ListHeader 
      title="Jogadores"
      subtitle="Total 3"
      />
      <FlatList
       data= {members} 
       keyExtractor={item => item.id}
       renderItem={({ item }) => (
        <Member data={item} />
      )}
      ItemSeparatorComponent ={() => <ListDivider />}
      style={styles.members}
      />
      <View style={styles.footer}> 
        <ButtonIcon 
          title="Entrar na partida" 
        />
      </View>
    </Background>
  );
}