import Card from "../UI/Cards";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteExpense = (event) => {
    event.preventDefault();
    if (event.target.className.includes("deleteExpense")) {
      const element = event.target.parentElement;
      element.remove();
    }
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="xpense-item__description">
        <h2>{props.expenseTitle}</h2>
      </div>
      <div className="LocationOfExpenditure">{props.locationOfExpenditure}</div>
      <div className="expense-item__price">${props.expenseAmount}</div>
      <button>Change Title</button>
      <button className="deleteExpense" onClick={deleteExpense}>
        Delete Expense
      </button>
    </Card>
  );
};

export default ExpenseItem;
