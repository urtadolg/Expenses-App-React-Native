import { ScrollView, FlatList, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import EmptyExpensesList from "./EmptyExpensesList";
import ExpensesItem from "./ExpensesItem";
import TotalDisplay from "./TotalDisplay";

const ExpensesList = ({ list }) => {
   let data;
   if (list === "all") {
      data = useSelector((state) => state.expenses.allExpenses);
   } else {
      data = useSelector((state) => state.expenses.recentExpenses);
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
