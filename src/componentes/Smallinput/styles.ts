import {StyleSheet} from 'react-native'
import { theme } from '../../global/styles/them'

 export const styles = StyleSheet.create({
        conteiner : {
            width : 48,
            height: 48,
            backgroundColor: theme.color.secondary40,
            color: theme.color.heading,
            borderRadius: 8,
            fontFamily: theme.fonts.text400,
            fontSize: 13,
            marginRight: 4,
            textAlign: 'center',
            borderWidth: 1,
            borderColor: theme.color.secondary50,
        }
 })