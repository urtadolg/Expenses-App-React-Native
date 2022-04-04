import { configureStore } from "@reduxjs/toolkit";
import ExpensesReducers from "./ExpensesSlice";

const ExpensesStore = configureStore({
   reducer: { expenses: ExpensesReducers },
});

export default ExpensesStore;
