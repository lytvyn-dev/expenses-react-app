import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

export default function Expenses(props) {
  const [year, setYear] = useState("2020");

  const filteredYear = (year) => {
    setYear(year);
  };

  const filtredArrays = props.data.filter((expense) => expense.date.getFullYear().toString() === year);

  return (
    <Card className="expenses">
      <ExpensesChart data={filtredArrays} />
      <ExpensesFilter selected={year} expenses={props.data} onFilteredYear={filteredYear} />
      <ExpensesList data={filtredArrays} />
    </Card>
  );
}
