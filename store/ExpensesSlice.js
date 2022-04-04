import { createSlice } from "@reduxjs/toolkit";

const ExpensesSlice = createSlice({
   name: "expenses",
   initialState: {
      recentExpenses: [
         { id: 2, name: "A book", date: "2022-2-19", value: 14.99 },
      ],
      allExpenses: [
         { id: 1, name: "A pair of shoes", date: "2021-12-19", value: 59.99 },
         { id: 2, name: "A book", date: "2022-2-19", value: 14.99 },
         { id: 3, name: "Some bananas", date: "2021-12-1", value: 14.99 },
      ],
   },
   reducers: {
      loadExpenses(state, action) {
         state.allExpenses = action.payload;
      },
      addExpense(state, action) {
         state.allExpenses.push(action.payload);
      },
      removeExpense(state, action) {
         state.allExpenses = state.allExpenses.filter(
            (expense) => expense.id !== action.payload.id
         );
      },
      updateExpense(state, action) {
         const foundItemIndex = state.allExpenses.indexOf(action.payload);
         if (foundItemIndex > -1) {
            state.allExpenses[foundItemIndex] = action.payload;
         }
      },
   },
});

export const ExpensesActions = ExpensesSlice.actions;
export default ExpensesSlice.reducer;
