import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from 'react-native';

import { styles } from './styles';

import { Background } from '../background';

type Props = ModalProps & {
  children: ReactNode;
 
}

export function ModalView({
  children, 
  ...rest
}: Props){
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
     
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
  
    </Modal>
  );
}