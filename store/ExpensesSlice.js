import { createSlice } from "@reduxjs/toolkit";

const ExpensesSlice = createSlice({
   name: "expenses",
   initialState: {
      allExpenses: [],
   },
   reducers: {
      addExpense(state, action) {
         state.allExpenses.push(action.payload);
      },
      removeExpense(state, action) {
         state.allExpenses = state.allExpenses.filter(
            (expense) => expense.id !== action.payload
         );
      },
      updateExpense(state, action) {
         const updatebleItem = state.allExpenses.find(
            (item) => item.id === action.payload.id
         );
         const foundItemIndex = state.allExpenses.indexOf(updatebleItem);

         if (foundItemIndex > -1) {
            state.allExpenses[foundItemIndex] = action.payload;
         }
      },
      setExpenses(state, action) {
         state.allExpenses = action.payload;
      },
   },
});

export const ExpensesActions = ExpensesSlice.actions;
export default ExpensesSlice.reducer;
