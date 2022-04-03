import { ScrollView, FlatList, View, Text, StyleSheet } from "react-native";
//import EXPENSES from "../data/EXPENSES";
import EmptyExpensesList from "./EmptyExpensesList";
import ExpensesItem from "./ExpensesItem";
import TotalDisplay from "./TotalDisplay";

const ExpensesList = ({ data }) => {
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
               keyExtractor={(item, index) => index}
               renderItem={(itemData) => (
                  <ExpensesItem
                     name={itemData.item.name}
                     date={itemData.item.date}
                     value={itemData.item.value}
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
