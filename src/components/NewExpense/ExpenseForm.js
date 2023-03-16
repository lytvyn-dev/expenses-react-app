import React, { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, SetEnteredTitle] = useState("");
  const [enteredDate, SetEnteredDate] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");

  const changeTitleHandler = (e) => {
    SetEnteredTitle(e.target.value);
  };
  const changeDateHandler = (e) => {
    SetEnteredDate(e.target.value);
  };
  const changeAmountHandler = (e) => {
    SetEnteredAmount(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const expensesData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };

    // send data to parent as argument
    props.onSaveExpenses(expensesData);

    SetEnteredTitle("");
    SetEnteredDate("");
    SetEnteredAmount("");
  };

  return (
    <form onSubmit={submitFormHandler} action="#">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={changeAmountHandler} min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={changeDateHandler} min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
