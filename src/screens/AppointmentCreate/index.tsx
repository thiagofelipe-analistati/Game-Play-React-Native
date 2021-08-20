
import React from 'react';
import { useState } from 'react';
import {Text, View, ScrollView, KeyboardAvoidingView, Platform} from 'react-native'
import { Background } from "../../componentes/background";
import { Category } from '../../componentes/Category';
import { CategorySelect } from '../../componentes/CategorySelect';
import {Header} from "../../componentes/Header";
import { styles } from './styles';
import {RectButton} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import { theme } from '../../global/styles/them';
import { GuildIcon } from '../../componentes/GuildIcon';
import { Smallinput } from '../../componentes/Smallinput';
import { TextArea } from '../../componentes/TextArea';
import { Button } from '../../componentes/Button';


export function AppointmentCreate(){
  const [category, setCategory] = useState ('');
  return(
    <KeyboardAvoidingView 
    behavior={Platform.OS ==='ios'? 'padding': 'height'}
    style={styles.container}
    > 
      <Background>
        <ScrollView>
        <Header
          title="Agendar Partidas"
        />   
        <Text style={[styles.label, {marginLeft: 24, marginTop: 36, marginBottom: 18}]}>
          Categoria
        </Text>
        <CategorySelect 
        hasCheckBox
        setCategory={setCategory}
        categorySelected={Category}
        />
        <View style={styles.form}>
          <RectButton >
            <View style={styles.select}>
              {
                  /*<View style={styles.image} />*/
                <GuildIcon />
              }
              <View style={styles.selectBody}> 
                < Text style={styles.label}>
                  Selecione um servidor
                </Text>
              </View>
              <Feather 
                  name="chevron-right"
                  color={theme.color.heading}
                  size={18}
                />
            </View>
          </RectButton> 
          <View style={styles.field}>
          <View> 
            <Text style={styles.label}>
              Dia e mês
            </Text>
            <View style={styles.columun}> 
                <Smallinput maxLength= {2} />
                <Text style={styles.divider}>
                  /
                </Text>
                <Smallinput maxLength= {2} />
            </View>
          </View>
          <View> 
            <Text style={styles.label}>
              Hora e Minuto
            </Text>
            <View style={styles.columun}> 
                <Smallinput maxLength= {2} />
                <Text style={styles.divider}>
                  /
                </Text>
                <Smallinput maxLength= {2} /> 
            </View>
          </View>
          </View>    
          <View style={[styles.field, {marginBottom: 12}]}> 
            <Text  style={styles.label}>
              Descrição 
            </Text>
            <Text style={styles.caracteresLimet}>
              Max 100 caracteres
            </Text>
          </View>
        <TextArea 
            multiline
              maxLength = {100}
              autoCorrect ={false}
              numberOfLines={5}
          />  
          <View style={styles.footer}> 
            <Button title="Agendar"/>
          </View>
        </View>
        </ScrollView>
      </Background>
    </KeyboardAvoidingView>
  );
}