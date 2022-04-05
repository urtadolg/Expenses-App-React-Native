import { createSlice } from "@reduxjs/toolkit";

const ExpensesSlice = createSlice({
   name: "expenses",
   initialState: {
      allExpenses: [
         {
            id: 1,
            name: "A pair of shoes",
            date: "2022-04-15",
            value: 59.99,
         },
         { id: 2, name: "A book", date: "2022-04-03", value: 14.99 },
         {
            id: 3,
            name: "Some bananas",
            date: "2022-04-01",
            value: 14.99,
         },
         {
            id: 4,
            name: "A pair of shoes",
            date: "2022-04-05",
            value: 59.99,
         },
         { id: 5, name: "A book", date: "2022-03-20", value: 14.99 },
         {
            id: 6,
            name: "Some bananas",
            date: "2022-03-01",
            value: 14.99,
         },
         {
            id: 7,
            name: "Some bananas",
            date: "2022-01-01",
            value: 14.99,
         },
      ],
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
   },
});

export const ExpensesActions = ExpensesSlice.actions;
export default ExpensesSlice.reducer;
