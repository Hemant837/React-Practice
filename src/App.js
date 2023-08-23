import React from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      expenseDate: new Date(2023, 8, 23),
      expenseTitle: "Burger",
      expenseAmount: 12,
      locationOfExpenditure: "Burger King",
    },
    {
      expenseDate: new Date(2023, 8, 22),
      expenseTitle: "Pizza",
      expenseAmount: 10,
      locationOfExpenditure: "Dominos",
    },
    {
      expenseDate: new Date(2023, 8, 21),
      expenseTitle: "Petrol",
      expenseAmount: 15,
      locationOfExpenditure: "Indian Oil",
    },
    {
      expenseDate: new Date(2023, 8, 20),
      expenseTitle: "Gadar 2",
      expenseAmount: 20,
      locationOfExpenditure: "RR Cinema",
    },
  ];

  return (
    <div className="App">
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          expenseDate={expense.expenseDate}
          expenseTitle={expense.expenseTitle}
          locationOfExpenditure={expense.locationOfExpenditure}
          expenseAmount={expense.expenseAmount}
        />
      ))}
    </div>
  );
}

export default App;
