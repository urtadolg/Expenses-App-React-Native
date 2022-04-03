import { View, Text, StyleSheet } from "react-native";

const EmptyExpensesList = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.message}>There is no expenses to show.</Text>
      </View>
   );
};

export default EmptyExpensesList;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   message: {
      color: "white",
      textAlign: "center",
   },
});
