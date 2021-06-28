import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from 'react';

const Expenses = (props) => {
  const [ yearSelected, setYearSelected] = useState("2020");  

  const yearSelectHandler = ( year ) => {
    setYearSelected(year);

  }
  return (
    <div className="expenses">
      <ExpensesFilter onYearSelected = {yearSelectHandler} defaultSelection = {yearSelected} />
      <Card className="expenses">
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
