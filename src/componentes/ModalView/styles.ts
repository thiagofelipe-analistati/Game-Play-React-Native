import {StyleSheet} from 'react-native'
import { theme } from '../../global/styles/them'


export const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: 100,
    }, overlay : {
        backgroundColor: theme.color.overlay,
        flex: 1
    }, bar : {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.color.secondary30,
        alignSelf: 'center',
        marginTop: 13,
        marginBottom: 103
    }
})