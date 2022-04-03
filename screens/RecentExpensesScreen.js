import { View, Text } from "react-native";
import EXPENSES from "../data/EXPENSES";
import ExpensesList from "../components/ExpensesList";

const RecentExpensesScreen = () => {
   return (
      <ExpensesList
         data={EXPENSES.filter((expense) => expense.date.slice(0, 4) >= 2022)}
      />
   );
};

export default RecentExpensesScreen;
