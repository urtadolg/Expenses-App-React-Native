import axios from "axios";
import { URL } from "@env";

const url = URL;

export const storeExpense = async (expenseData) => {
   const response = await axios.post(url + "/expenses.json", expenseData);
   const id = response.data.name;
   return id;
};

export const fetchExpenses = async () => {
   const response = await axios.get(url + "/expenses.json");

   const expenses = [];

   for (const key in response.data) {
      const expenseObj = {
         id: key,
         name: response.data[key].name,
         date: response.data[key].date,
         value: response.data[key].value,
      };
      expenses.push(expenseObj);
   }

   return expenses;
};

export const updateExpense = async (id, expenseData) => {
   return axios.put(url + `/expenses/${id}.json`, expenseData);
};

export const deleteExpense = async (id) => {
   return axios.delete(url + `/expenses/${id}.json`);
};
