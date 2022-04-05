import { useSelector } from "react-redux";
import ExpensesList from "../components/ExpensesList";

const RecentExpensesScreen = () => {
   const data = useSelector((state) => state.expenses.recentExpenses);

   return <ExpensesList period="Last 7 days" />;
};

export default RecentExpensesScreen;
