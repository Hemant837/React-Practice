import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expense";

const App = () => {
  const expenses = [
    {
      expenseDate: new Date(2023, 8, 23),
      expenseTitle: "Burger",
      expenseAmount: 12,
    },
    {
      expenseDate: new Date(2023, 8, 22),
      expenseTitle: "Pizza",
      expenseAmount: 10,
    },
    {
      expenseDate: new Date(2023, 8, 22),
      expenseTitle: "Petrol",
      expenseAmount: 15,
    },
    {
      expenseDate: new Date(2023, 8, 22),
      expenseTitle: "Gadar 2",
      expenseAmount: 20,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
