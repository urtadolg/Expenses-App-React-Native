import { View, Text, StyleSheet } from "react-native";

const TotalDisplay = ({ value }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.total}>Total</Text>
         <Text style={styles.value}>${value}</Text>
      </View>
   );
};

export default TotalDisplay;

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#dfdfdf",
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginTop: 30,
      marginHorizontal: 25,
   },
   total: {
      color: "#4c00ff",
   },
   value: {
      color: "#4c00ff",
      fontWeight: "bold",
      fontSize: 18,
   },
});
