import React, { useState } from "react";
import Card from "../UI/Cards";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expenseTitle);

  const changeTitle = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="xpense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="LocationOfExpenditure">{props.locationOfExpenditure}</div>
      <div className="expense-item__price">${props.expenseAmount}</div>
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
