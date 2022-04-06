import { View, Text, StyleSheet } from "react-native";

const ErrorOverlay = ({ errorMessage }) => {
   return (
      <View style={styles.container}>
         <Text style={[styles.text, styles.title]}>
            Something went wrong...
         </Text>
         <Text style={styles.text}>{errorMessage}</Text>
      </View>
   );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
   title: {
      fontSize: 24,
      fontWeight: "bold",
   },
   text: {
      textAlign: "center",
      color: "white",
   },
});
