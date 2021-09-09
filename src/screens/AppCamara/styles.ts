
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/them";


export const styles = StyleSheet.create({
    container : {
        flex: 1, 
        justifyContent: 'center'
    },
    camera : {
        width: '100%',
        height: '100%',
    },
    buttonContainer :{
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        },
    button : {
      position:'absolute',
      bottom: 50,
      left: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#ffffff',
      margin:20,
      height: 50,
      width:50,
      borderRadius: 50,
    },
    text : {
        color: theme.color.heading,
        textAlign: 'center',
        fontSize:15,  
        marginBottom: 64,
        fontFamily: theme.fonts.title500,
        lineHeight : 20
    },
    buttonCamera : {
        position: "absolute",
        bottom: 50,
        right: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        margin: 20,
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    modal : {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        margin: 20
    }
})