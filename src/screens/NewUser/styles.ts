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
    },
    imput: {
        height: 56,
        color: theme.color.secondary100,
        textAlign: 'center',
        fontSize: 15,  
        fontFamily: theme.fonts.text400,
        backgroundColor: theme.color.heading,
        borderRadius:8,
    },  
    button : {
        width: '100%',
        height: 56,
        marginTop: 20,
        backgroundColor: theme.color.primary,
        borderRadius: 8,
        justifyContent: 'center'
    },
    textbutton : {
        color: theme.color.heading,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: theme.fonts.text500,
    },
    registar :{
        color: theme.color.heading,
        fontSize: 10,  
        fontFamily: theme.fonts.text400,
        lineHeight : 20,
        marginTop: 20,
    },
    contentAlert:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
     }, 
     alert : {
        color: theme.color.primary,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: theme.fonts.text500,
     },
     linksubscribe : {  
        color: "#1877f2",
     }
})