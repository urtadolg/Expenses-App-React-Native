import { ScrollView, FlatList, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import EmptyExpensesList from "./EmptyExpensesList";
import ExpensesItem from "./ExpensesItem";
import TotalDisplay from "./TotalDisplay";

const ExpensesList = ({ period }) => {
   let expensesList = useSelector((state) => state.expenses.allExpenses);

   const date = new Date();

   const getDateMinusDays = (date, days) => {
      return new Date(
         date.getFullYear(),
         date.getMonth(),
         date.getDate() - days
      );
   };

   const date7DaysAgo = getDateMinusDays(date, 7);

   let data;

   if (period === "Last 7 days") {
      data = expensesList.filter(
         (expense) => new Date(expense.date) >= date7DaysAgo
      );
   } else {
      data = expensesList;
   }

   if (data.length === 0) {
      return <EmptyExpensesList />;
   } else {
      let total = 0;
      for (let expense of data) {
         total = total + expense.value;
      }

      return (
         <>
            <TotalDisplay value={total.toFixed(2)} />
            <FlatList
               style={styles.listContainer}
               data={data}
               keyExtractor={(item, index) => item.id}
               renderItem={(itemData) => (
                  <ExpensesItem
                     name={itemData.item.name}
                     date={itemData.item.date}
                     value={itemData.item.value}
                     id={itemData.item.id}
                  />
               )}
            />
         </>
      );
   }
};

export default ExpensesList;

const styles = StyleSheet.create({
   listContainer: {
      paddingHorizontal: 25,
   },
});
