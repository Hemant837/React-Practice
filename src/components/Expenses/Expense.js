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
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} // Assuming each expense has a unique "id" property
          expenseTitle={expense.expenseTitle}
          expenseAmount={expense.expenseAmount}
          expenseDate={expense.expenseDate}
        />
      ))}
    </Card>
  );
};

export default Expenses;
