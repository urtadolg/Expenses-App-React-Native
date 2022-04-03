import { View, Text } from "react-native";
import ExpensesList from "../components/ExpensesList";
import EXPENSES from "../data/EXPENSES";

const AllExpensesScreen = () => {
   return <ExpensesList data={EXPENSES} />;
};

export default AllExpensesScreen;
