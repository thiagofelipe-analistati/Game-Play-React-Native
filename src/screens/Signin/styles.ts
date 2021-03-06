import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/them";


export const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    image : {
        width: '100%',
        height: 360,
        marginTop: -80,

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
        lineHeight : 40,
        
         
    },
    subTitle : {
        color: theme.color.heading,
        textAlign: 'center',
        fontSize:15,  
        marginBottom: 64,
        fontFamily: theme.fonts.title500,
        lineHeight : 20
    },imput: {
        height: 50,
        color: theme.color.secondary100,
        textAlign: 'center',
        fontSize: 15,  
        fontFamily: theme.fonts.text400,
        lineHeight : 20,
        backgroundColor: theme.color.heading,
        borderRadius:8,
    },
    registar :{
        color: theme.color.heading,
        fontSize: 10,  
        fontFamily: theme.fonts.text400,
        lineHeight : 20,
    }
   

   

})