import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/them';

export const styles =  StyleSheet.create({
    container : {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',

    }, title :{
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.color.heading
    }, status:{
        flexDirection: 'row',
        alignItems: 'center',
    }, namestatus:{
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.color.highlight
    }, bulletStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 9
    }
})