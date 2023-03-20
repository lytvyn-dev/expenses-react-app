import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveExpensesHandler = (expenses) => {
    const expensesData = {
      ...expenses,
      id: Math.random().toString(),
    };
    //add expnense to App.js
    props.onSaveExpense(expensesData);
  };

  const showFormHandler = () => {
    setIsFormVisible(true);
  };

  const hideFormHandeler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!isFormVisible && <button onClick={showFormHandler}>Add Expense</button>}
      {isFormVisible && <ExpenseForm onHideForm={hideFormHandeler} onSaveExpenses={saveExpensesHandler} />}
    </div>
  );
}
