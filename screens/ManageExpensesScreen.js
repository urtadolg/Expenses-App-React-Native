import { View, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { ExpensesActions } from "../store/ExpensesSlice";
import ExpensesForm from "../components/ManageExpenses/ExpensesForm";

const ManageExpenses = ({ route, navigation }) => {
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

   const getFormatedDate = (date) => {
      const formatedYear = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      const formatedMonth = month < 10 ? `0${month}` : `${month}`;
      const formatedDay = day < 10 ? `0${day}` : `${day}`;

      return `${formatedYear}-${formatedMonth}-${formatedDay}`;
   };

   const onConfirmHandler = (data) => {
      if (isEditing) {
         (data.id = expenseId), dispatch(ExpensesActions.updateExpense(data));
      } else {
         dispatch(ExpensesActions.addExpense(data));
      }
      navigation.goBack();
   };

   const onDeleteHandler = () => {
      dispatch(ExpensesActions.removeExpense(expenseId));
      navigation.goBack();
   };

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
