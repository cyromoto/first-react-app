import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = ( props ) => {
    const saveExpenseItemHandler = ( expenseItem ) => {
        const newExpense = {
            ...expenseItem,
            id: Math.random().toString()
        };
        // console.log(newExpense);
        props.onAddExpense(newExpense);
    }
    return (
        <div className = "new-expense">
            < ExpenseForm onSaveExpenseItem = { saveExpenseItemHandler } />
        </div>
    )
}

export default NewExpense;