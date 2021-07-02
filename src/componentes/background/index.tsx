import React from 'react';
import {styles} from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/them';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

export function Background({children}: Props){
    const { secondary100, secondary80} = theme.color;
    return(
        <LinearGradient
            style = {styles.container}
            colors={[theme.color.secondary80, theme.color.secondary100]}
        >
            {children}

        </LinearGradient>
    ) ;
}
