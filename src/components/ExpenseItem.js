import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-items">
      <ExpenseDate date={props.expenseDate} />
      <ExpenseDetails
        title={props.expenseTitle}
        location={props.locationOfExpenditure}
        amount={props.expenseAmount}
      />
    </div>
  );
}

export default ExpenseItem;
