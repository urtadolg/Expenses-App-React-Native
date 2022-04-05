import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";

const ExpensesForm = ({ isEditing, onConfirm, onCancel, defaultValue }) => {
   const [dataValidation, setDataValidation] = useState({
      amount: true,
      date: true,
      description: true,
   });
   const invalidForm =
      !dataValidation.amount ||
      !dataValidation.date ||
      !dataValidation.description;
   const [enteredData, setEnteredData] = useState({
      amount: defaultValue ? defaultValue.value.toString() : "",
      date: defaultValue ? defaultValue.date : "",
      description: defaultValue ? defaultValue.name : "",
   });
   const onInputChangeHandler = (inputIdentifier, inputData) => {
      setEnteredData((currentData) => {
         return {
            ...currentData,
            [inputIdentifier]: inputData,
         };
      });
      setDataValidation((state) => {
         return {
            ...state,
            [inputIdentifier]: true,
         };
      });
   };

   const onSubmitHandler = () => {
      const data = {
         id: Math.random(),
         value: +enteredData.amount,
         date: enteredData.date,
         name: enteredData.description,
      };

      if (!data.value || data.value <= 0) {
         setDataValidation((state) => {
            return {
               ...state,
               amount: false,
            };
         });
         return;
      }
      if (!data.date || new Date(data.date).toString() === "Invalid Date") {
         setDataValidation((state) => {
            return {
               ...state,
               date: false,
            };
         });
         return;
      }
      if (!data.name || data.name.trim().length === 0) {
         setDataValidation((state) => {
            return {
               ...state,
               description: false,
            };
         });
         return;
      }

      onConfirm(data);
   };

   return (
      <View style={styles.formContainer}>
         <Text style={styles.title}>Your Expenses</Text>
         <View style={styles.amoutDateContainer}>
            <Input
               textLabel="Amount"
               inputConfig={{
                  keyboardType: "decimal-pad",
                  onChangeText: onInputChangeHandler.bind(this, "amount"),
                  value: enteredData.amount,
               }}
               style={[styles.inputRow, { marginRight: 8 }]}
               isInvalid={!dataValidation.amount}
            />
            <Input
               textLabel="Date"
               inputConfig={{
                  maxLength: 10,
                  placeholder: "YYYY-MM-DD",
                  onChangeText: onInputChangeHandler.bind(this, "date"),
                  value: enteredData.date,
               }}
               style={[styles.inputRow, { marginLeft: 8 }]}
               isInvalid={!dataValidation.date}
            />
         </View>
         <Input
            textLabel="Description"
            inputConfig={{
               multiline: true,
               onChangeText: onInputChangeHandler.bind(this, "description"),
               value: enteredData.description,
            }}
            isInvalid={!dataValidation.description}
         />
         {invalidForm && (
            <Text style={styles.errorMessage}>
               Invalid Input: Please check your entered Data.
            </Text>
         )}
         <View style={styles.buttonsContainer}>
            <Button type="flat" onPress={onCancel}>
               {isEditing ? "Dismiss" : "Cancel"}
            </Button>
            <Button onPress={onSubmitHandler}>
               {isEditing ? "Update" : "Add"}
            </Button>
         </View>
      </View>
   );
};

export default ExpensesForm;

const styles = StyleSheet.create({
   formContainer: {
      marginTop: 80,
      marginHorizontal: 30,
   },
   title: {
      color: "white",
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
   },
   amoutDateContainer: {
      flexDirection: "row",
   },
   inputRow: {
      flex: 1,
   },
   buttonsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 20,
      marginHorizontal: 20,
   },
   errorMessage: {
      color: "#ff3838",
      textAlign: "center",
   },
});
