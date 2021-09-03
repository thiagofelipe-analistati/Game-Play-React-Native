import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, Image, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './styles'
import { Profile } from '../../componentes/Profile';
import { ButtonAdd } from '../../componentes/ButtonAdd';
import { CategorySelect } from '../../componentes/CategorySelect';
import { ListHeader } from '../../componentes/ListHeader';
import { Appointment } from '../../componentes/Appointment';
import { ListDivider } from '../../componentes/ListDivider';
import { Background } from '../../componentes/background';
import firebase from '../../services/firebase/api';


export function Home(){
  const [category, setCategory] = useState ('');
  const navigation = useNavigation();

  const appointments =[
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      }, category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      }, category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      }, category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma'
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      }, category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma'
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      }, category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma'
    },
    {
      id: '6',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      }, category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma'
    }
  ]
  function handleLogout(){
    firebase.auth().signOut().then(() => {
      navigation.navigate("Login");
    }).catch((error) => {
    });
  }
  function handleCategorySelect( categoryId: string){
    categoryId === category ? setCategory(''): setCategory(categoryId);
  }

  function handleAppointmentdetails(){
      navigation.navigate('AppointmentDetails');
  }
  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate');
  }
  return(
      <Background >
        <View style={styles.header}> 
          <Profile />
          <TouchableOpacity 
            style={styles.logout}
            onPress={handleLogout}

          >

          <Text style={styles.textlogout}> Sair </Text>
          </TouchableOpacity>

  
          <ButtonAdd onPress={handleAppointmentCreate}/>
        </View>
          <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect} />
              <ListHeader 
                title = "Partidas agendadas"
                subtitle="Total 6"
              />
          <FlatList 
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({item })=>(
                  <Appointment 
                  data={item} 
                  onPress={handleAppointmentdetails}
                  />
                 )}   
                 ItemSeparatorComponent ={() => <ListDivider />} 
                 contentContainerStyle={{paddingBottom: 69}}
                style={styles.matches}
                 showsHorizontalScrollIndicator={false}
              />
      </Background>
  );
}