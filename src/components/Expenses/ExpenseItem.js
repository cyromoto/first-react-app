import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  return (
    <Card className='expense-item'>
      <ExpenseDate date = {expenseDate}></ExpenseDate>
      <h2 className = 'expense-item__description'>{expenseTitle}</h2>
      <div className = 'expense-item__price'>Rs. {expenseAmount}</div>
    </Card>
  );
}

export default ExpenseItem;
