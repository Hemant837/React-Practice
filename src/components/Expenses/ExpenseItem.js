import Card from "../UI/Cards";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="xpense-item__description">
        <h2>{props.expenseTitle}</h2>
      </div>
      <div className="LocationOfExpenditure">{props.locationOfExpenditure}</div>
      <div className="expense-item__price">${props.expenseAmount}</div>
    </Card>
  );
};

export default ExpenseItem;
