import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/them";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',  
        justifyContent: 'center'
    },
    header : {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42

    },
    content :{
        marginTop: -40,
        paddingHorizontal: 50

    },
    title : {
        color: theme.color.heading,
        textAlign: 'center',
        fontSize:40,  
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight : 40
         
    },
    subTitle : {
        color: theme.color.heading,
        textAlign: 'center',
        fontSize:15,  
        marginBottom: 64,
        fontFamily: theme.fonts.title500,
        lineHeight : 20
    }
   

   

})