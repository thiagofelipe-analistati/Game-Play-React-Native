import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/them";

export const styles = StyleSheet.create({
    container : {
        width: 104,
        height:  120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: 100,
        height: 116,
        backgroundColor: theme.color.secondary40,
        borderRadius:8,
        justifyContent:'space-between',
        alignItems: 'center',
        paddingVertical: 7

    },
    title: {
        fontFamily: theme.fonts.text500,
        color: theme.color.heading,
        fontSize: 15
    },
    check: {
        width:12,
        height:12,
        backgroundColor: theme.color.secondary100,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderColor: theme.color.secondary50,
        borderWidth:3,
        borderRadius: 3
    }, 
    checked :{
        width:12,
        height:12,
        backgroundColor: theme.color.primary,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderRadius: 3
    }
})  