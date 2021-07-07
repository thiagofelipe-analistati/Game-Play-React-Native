import React from 'react';
import {View , Image, Text} from 'react-native'
import {SvgProps} from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient';

import {styles} from './styles';
import { categories } from '../../utils/categories';
import { RectButtonProps, RectButton} from 'react-native-gesture-handler';
import { theme } from '../../global/styles/them';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked? : boolean;
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props){
  const { secondary50, secondary70} = theme.color;
  return(
    <RectButton {...rest}> 
      <LinearGradient
          style = {styles.container}
          colors={[secondary50, secondary70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4}]}>
          < View style={checked ? styles.checked : styles.check}/>
            <Icon width={48}
            height={48} />
            <Text style = { styles.title}>
                {title}
            </Text>
          </View>
      </LinearGradient>
    </RectButton>
      
   
  );
}