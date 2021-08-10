import React, {useState} from 'react';
import {View, Text, Image, StatusBar, FlatList} from 'react-native';
import {styles} from './styles'

import { Profile } from '../../componentes/Profile';
import { ButtonAdd } from '../../componentes/ButtonAdd';
import { CategorySelect } from '../../componentes/CategorySelect';
import { ListHeader } from '../../componentes/ListHeader';
import { Appointment } from '../../componentes/Appointment';
import { ListDivider } from '../../componentes/ListDivider';





export function Home(){
  const [category, setCategory] = useState ('');
  
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
    }
  ]

  function handleCategorySelect( categoryId: string){
    categoryId === category ? setCategory(''): setCategory(categoryId);
  }
  return(
      <View>
        <View style={styles.header}> 
          <Profile />
          <ButtonAdd />
        </View>
          <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect} />
          <View style={styles.content}>
              <ListHeader 
                title = "Partidas agendadas"
                subtitle="Total 6"
              />
              <FlatList 
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({item })=>(
                  <Appointment data={item} 
              />
                 )}   
                 ItemSeparatorComponent ={() => <ListDivider />} 
                style={styles.matches}
                 showsHorizontalScrollIndicator={false}
              />
          </View>
      </View>
  );
}