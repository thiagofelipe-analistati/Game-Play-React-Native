import React, {useState} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {styles} from './styles'

import { Profile } from '../../componentes/Profile';
import { ButtonAdd } from '../../componentes/ButtonAdd';
import { CategorySelect } from '../../componentes/CategorySelect';



export function Home(){
  const [category, setCategory] = useState ('');

  function handleCategorySelect( categoryId: string){
    categoryId === Category ? setCategory(''): setCategory(categoryId);
  }
  return(
      <View>
        <View style={styles.header}> 
          <Profile />
          <ButtonAdd />
        </View>
        <View>
          <CategorySelect
          categorySelected={category}
          setCategory={setCategory} />
        </View>

      </View>
  );
}