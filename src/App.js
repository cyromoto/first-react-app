// import { react } from '@babel/types';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";
// import React from 'react';

const DUMMY_EXPENSES = [
  {
    id: Math.random().toString(),
    title: "Purchased POCO M3",
    amount: 11250,
    date: new Date(2021, 5, 13),
  },
  {
    id: Math.random().toString(),
    title: "Purchased HP Omen",
    amount: 74490,
    date: new Date(2020, 4, 19),
  },
  {
    id: Math.random().toString(),
    title: "Petrol full tank",
    amount: 4300,
    date: new Date(2020, 1, 2),
  },
];

const App = () => {
  const [data, setData] = useState(DUMMY_EXPENSES);

  const addExpenseItem = (expenseData) => {
    console.log("In App.js");
    console.log(expenseData);
    setData((previousState) => {
      console.log([expenseData, ...previousState])
      return [expenseData, ...previousState];
    });
  };
  return (
    // React.createElement("div",{},React.createElement(Expenses,{expenses : expenses})));
    <div>
      <NewExpense onAddExpense={addExpenseItem} />
      <Expenses expenses={data} />
    </div>
  );
};

export default App;
