import React from "react";
import Card from "../UI/Cards";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expenseDate} />
        <div className="expense-item__description">
          <h2>{props.expenseTitle}</h2>
          <div className="expense-item__price">${props.expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
