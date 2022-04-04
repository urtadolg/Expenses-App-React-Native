import { useSelector } from "react-redux";
import ExpensesList from "../components/ExpensesList";

const RecentExpensesScreen = () => {
   const data = useSelector((state) => state.expenses.recentExpenses);

   return <ExpensesList list="recent" />;
};

export default RecentExpensesScreen;
