import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/them";



export const styles = StyleSheet.create({
    container : {
        flex: 1,
    }, label : {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.color.heading,
    }, form: {
        paddingHorizontal: 24,
        marginTop: 32,
    }, select :{
        width: '100%',
        height:68,
        flexDirection: 'row',
        borderColor: theme.color.secondary50,
        borderRadius: 8,
        borderWidth:1,
        alignItems: 'center',
        paddingRight: 25,
        overflow: "hidden"
    } , selectBody :{
        flex: 1,
        alignItems: 'center',
    }, image : {
        width: 64,
        height: 68,
        backgroundColor: theme.color.secondary50,
        borderColor: theme.color.secondary50,
        borderRadius: 8,
        borderWidth:1,
    }, field : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    } ,columun :{
        flexDirection: 'row',
        alignItems: 'center',
    }, divider :{
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.color.highlight,
    } , caracteresLimet:{
        fontSize:13,
        color: theme.color.highlight,
        fontFamily: theme.fonts.text400,
    } , footer :{
        marginVertical: 20,
        marginBottom: 56,
    }
})