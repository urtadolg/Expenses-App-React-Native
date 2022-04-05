import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, color, size, onPress, style }) => {
   return (
      <View style={style}>
         <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.buttonPressed}
         >
            <Ionicons name={name} color={color} size={size} />
         </Pressable>
      </View>
   );
};

export default IconButton;

const styles = StyleSheet.create({
   buttonPressed: {
      opacity: 0.5,
   },
});
