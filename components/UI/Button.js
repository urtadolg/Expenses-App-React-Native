import { View, Text, Pressable, StyleSheet } from "react-native";

const Button = ({ type, onPress, children }) => {
   const isFlat = type === "flat";

   return (
      <Pressable
         onPress={onPress}
         style={({ pressed }) => pressed && styles.buttonPressed}
      >
         <View style={isFlat ? styles.flatButton : styles.button}>
            <Text style={styles.buttonText}>{children}</Text>
         </View>
      </Pressable>
   );
};

export default Button;

const styles = StyleSheet.create({
   flatButton: {
      width: 130,
      height: 40,
      marginHorizontal: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
   },
   button: {
      width: 130,
      height: 40,
      marginHorizontal: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#4c00ff",
      borderRadius: 5,
   },
   buttonText: {
      color: "white",
      textAlign: "center",
   },
   buttonPressed: {
      opacity: 0.75,
   },
});
