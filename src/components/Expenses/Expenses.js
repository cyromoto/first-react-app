import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [yearSelected, setYearSelected] = useState("2020");

  const yearSelectHandler = (year) => {
    setYearSelected(year);
  };
  return (
    <div className="expenses">
      <Card className="expenses">
        <ExpensesFilter
          onYearSelected={yearSelectHandler}
          defaultSelection={yearSelected}
        />
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              id = {expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
