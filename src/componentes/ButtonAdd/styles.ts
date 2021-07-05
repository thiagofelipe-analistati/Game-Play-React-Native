import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/them";

export const styles = StyleSheet.create({
    container : {
      height: 48,
      width: 48,
      backgroundColor: theme.color.primary,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center'
    }
})