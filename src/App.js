import { react } from '@babel/types';
import Expenses from './components/Expenses/Expenses';
import React from 'react';

const App = () => {
  const data = [
    {
      title: "Purchased POCO M3",
      amount: 11250,
      date: new Date(2021,5,13)
    },
    {
      title: "Purchased HP Omen",
      amount: 74490,
      date: new Date(2020,4,19)
    },
    {
      title: "Petrol full tank",
      amount: 4300,
      date: new Date(2020,1,2)
    }
  ]
  return (
    // React.createElement("div",{},React.createElement(Expenses,{expenses : expenses})));
    <div>
      <Expenses expenses = {data} />
    </div>
  );
}

export default App;
