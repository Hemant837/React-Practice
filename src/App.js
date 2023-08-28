import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expense";

const dummyData = [
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

const App = () => {
  const [expenses, setExpenses] = useState(dummyData)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=> {
      return [...prevExpenses, expense]
    })
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
