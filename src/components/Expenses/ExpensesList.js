import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Expenses not found.</h2>;
  }

  if (props.items.length === 1) {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expenseTitle={expense.expenseTitle}
            expenseAmount={expense.expenseAmount}
            expenseDate={expense.expenseDate}
          />
        ))}
        <h2 className="expenses-list__fallback">
          Only single Expense here. Please add more...
        </h2>
      </ul>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expenseTitle={expense.expenseTitle}
          expenseAmount={expense.expenseAmount}
          expenseDate={expense.expenseDate}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
