import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import Card from "../UI/Cards";
import "./Expense.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem
        expenseTitle={props.items[0].expenseTitle}
        expenseAmount={props.items[0].expenseAmount}
        expenseDate={props.items[0].expenseDate}
      />
      <ExpenseItem
        expenseTitle={props.items[1].expenseTitle}
        expenseAmount={props.items[1].expenseAmount}
        expenseDate={props.items[1].expenseDate}
      />
      <ExpenseItem
        expenseTitle={props.items[2].expenseTitle}
        expenseAmount={props.items[2].expenseAmount}
        expenseDate={props.items[2].expenseDate}
      />
      <ExpenseItem
        expenseTitle={props.items[3].expenseTitle}
        expenseAmount={props.items[3].expenseAmount}
        expenseDate={props.items[3].expenseDate}
      />
    </Card>
  );
};

export default Expenses;
