import Card from '../UI/Card';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const Date = props.date;
  const day = Date.toLocaleString("en-US", { day: "2-digit" });
  const month = Date.toLocaleString("en-US", { month: "long" });
  const year = Date.toLocaleString("en-US", { year: "numeric" });

  return (
    <Card className = 'expense-date'>
      <div className = 'expense-date__month'>{month}</div>
      <div className = 'expense-date__year'>{year}</div>
      <div className = 'expense-date__day'>{day}</div>
    </Card>
  );
}

export default ExpenseDate;