import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const saveExpensesHandler = (expenses) => {
    const expensesData = {
      ...expenses,
      id: Math.random().toString(),
    };

    //add expnense to App.js
    props.onSaveExpense(expensesData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenses={saveExpensesHandler} />
    </div>
  );
}
