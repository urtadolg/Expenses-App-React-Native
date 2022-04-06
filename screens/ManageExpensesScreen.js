import { useState } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { ExpensesActions } from "../store/ExpensesSlice";
import ExpensesForm from "../components/ManageExpenses/ExpensesForm";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const ManageExpenses = ({ route, navigation }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState();
   const expenseId = route.params?.id;
   const isEditing = !!expenseId;
   const dispatch = useDispatch();
   const expensesList = useSelector((state) => state.expenses.allExpenses);
   const selectedExpense = expensesList.find(
      (expense) => expense.id === expenseId
   );

   const onCancelHandler = () => {
      navigation.goBack();
   };

   const onConfirmHandler = async (data) => {
      setIsLoading(true);
      try {
         if (isEditing) {
            await updateExpense(data.id, data);
            dispatch(ExpensesActions.updateExpense(data));
         } else {
            const id = await storeExpense(data);
            dispatch(ExpensesActions.addExpense({ ...data, id: id }));
         }
         navigation.goBack();
      } catch (error) {
         setError("Unable to save the data. Please try again later.");
         setIsLoading(false);
      }
   };

   const onDeleteHandler = () => {
      dispatch(ExpensesActions.removeExpense(expenseId));
      setIsLoading(true);
      try {
         deleteExpense(expenseId);
      } catch (error) {
         setError("Unable to delete. Please try again later.");
         setIsLoading(false);
      }
      navigation.goBack();
   };

   if (isLoading) {
      return <LoadingOverlay />;
   }

   if (!isLoading && error) {
      return <ErrorOverlay errorMessage={error} />;
   }

   return (
      <View style={styles.container}>
         <ExpensesForm
            isEditing={isEditing}
            onCancel={onCancelHandler}
            onConfirm={onConfirmHandler}
            defaultValue={selectedExpense}
         />

         {isEditing && (
            <View style={styles.iconButtonContainer}>
               <IconButton
                  name="trash"
                  color="#ff2c2c"
                  size={25}
                  onPress={onDeleteHandler}
               />
            </View>
         )}
      </View>
   );
};

export default ManageExpenses;

const styles = StyleSheet.create({
   container: {},

   iconButtonContainer: {
      paddingVertical: 20,
      marginHorizontal: 20,
      borderTopColor: "white",
      borderTopWidth: 2,
      flexDirection: "row",
      justifyContent: "center",
   },
});
