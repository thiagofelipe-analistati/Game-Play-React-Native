import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/them";


export const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: theme.color.secondary100
    },
    image : {
        width: '100%',
        height: 360

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