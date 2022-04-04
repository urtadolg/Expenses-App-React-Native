import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { ExpensesActions } from "../store/ExpensesSlice";

const EditExpenseScreen = ({ route, navigation }) => {
   const id = route.params.id;
   const dispatch = useDispatch();

   const onDeleteHandler = () => {
      dispatch(ExpensesActions.removeExpense({ id: id }));
      navigation.navigate("All Expenses");
   };

   return (
      <View style={styles.container}>
         <View style={styles.buttonsContainer}>
            <Pressable
               style={({ pressed }) =>
                  pressed
                     ? [styles.dismissContainer, styles.buttonPressed]
                     : styles.dismissContainer
               }
            >
               <Text style={styles.buttonText}>Dismiss</Text>
            </Pressable>
            <Pressable
               style={({ pressed }) =>
                  pressed
                     ? [styles.updateContainer, styles.buttonPressed]
                     : styles.updateContainer
               }
            >
               <Text style={styles.buttonText}>Update</Text>
            </Pressable>
         </View>
         <Pressable
            onPress={onDeleteHandler}
            style={({ pressed }) =>
               pressed
                  ? [styles.deleteContainer, styles.buttonPressed]
                  : styles.deleteContainer
            }
         >
            <Ionicons name="trash" color="#ff2c2c" size={25} />
         </Pressable>
      </View>
   );
};

export default EditExpenseScreen;

const styles = StyleSheet.create({
   container: {},
   buttonsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 20,
      marginBottom: 20,
      borderBottomColor: "white",
      borderBottomWidth: 2,
      marginHorizontal: 20,
   },
   dismissContainer: {
      width: 130,
      height: 40,
      marginHorizontal: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
   },
   updateContainer: {
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
      opacity: 0.5,
   },
   deleteContainer: {
      flexDirection: "row",
      justifyContent: "center",
   },
});
