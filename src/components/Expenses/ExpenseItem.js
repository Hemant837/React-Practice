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

  // Button is added
  const [newAmount, setAmount] = useState(props.expenseAmount);
  const addHundred = () => {
    setAmount("100");
    console.log(newAmount);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="xpense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="LocationOfExpenditure">{props.locationOfExpenditure}</div>
      <div className="expense-item__price">${newAmount}</div>
      <button onClick={changeTitle}>Change Title</button>
      <button onClick={addHundred}>Add 100</button>
    </Card>
  );
};

export default ExpenseItem;
