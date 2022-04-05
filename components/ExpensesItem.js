import { View, Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExpensesItem = ({ name, date, value, id }) => {
   const navigate = useNavigation();

   const onItemPressHandler = () => {
      navigate.navigate("Edit Expenses", { id: id });
   };

   return (
      <Pressable onPress={onItemPressHandler}>
         <View style={styles.itemContainer}>
            <View>
               <Text style={styles.name}>{name}</Text>
               <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.valueContainer}>
               <Text style={styles.value}>{value}</Text>
            </View>
         </View>
      </Pressable>
   );
};

export default ExpensesItem;

const styles = StyleSheet.create({
   itemContainer: {
      backgroundColor: "#4c00ff",
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginVertical: 8,
   },
   name: {
      color: "white",
      fontWeight: "bold",
      marginBottom: 5,
      fontSize: 15,
   },
   date: {
      color: "white",
   },
   valueContainer: {
      backgroundColor: "white",
      justifyContent: "center",
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 5,
   },
   value: {
      color: "#4c00ff",
      fontWeight: "bold",
   },
});
