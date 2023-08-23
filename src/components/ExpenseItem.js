import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 8, 23);
  const expenseTitle = 'Food';
  const expenseAmount = 294.67;
  const locationOfExpenditure = "Pizza Hut";

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="xpense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="LocationOfExpenditure">{locationOfExpenditure}</div>
      <div className="expense-item__price">${expenseAmount}</div>
    </div>
  );
}

export default ExpenseItem;
