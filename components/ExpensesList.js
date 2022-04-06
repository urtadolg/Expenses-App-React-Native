import { useState, useEffect } from "react";
import { fetchExpenses } from "../util/http";
import { FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ExpensesActions } from "../store/ExpensesSlice";
import EmptyExpensesList from "./EmptyExpensesList";
import ExpensesItem from "./ExpensesItem";
import TotalDisplay from "./TotalDisplay";
import LoadingOverlay from "./UI/LoadingOverlay";
import ErrorOverlay from "./UI/ErrorOverlay";

const ExpensesList = ({ period }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState();
   let expensesList = useSelector((state) => state.expenses.allExpenses);
   const dispatch = useDispatch();

   useEffect(() => {
      const fetchExpensesData = async () => {
         setIsLoading(true);
         try {
            const receivedList = await fetchExpenses();
            dispatch(ExpensesActions.setExpenses(receivedList));
         } catch (error) {
            setError("Unable to access the server. Please try again later.");
            setIsLoading(false);
         }
         setIsLoading(false);
      };
      fetchExpensesData();
   }, []);

   const date = new Date();

   const getDateMinusDays = (date, days) => {
      return new Date(
         date.getFullYear(),
         date.getMonth(),
         date.getDate() - days
      );
   };

   if (isLoading) {
      return <LoadingOverlay />;
   }

   if (!isLoading && error) {
      return <ErrorOverlay errorMessage={error} />;
   }

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
                     value={`$${+itemData.item.value.toFixed(2)}`}
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
