import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function NewExpenseComponent(props) {
  const [year, setYear] = useState("2020");

  const filteredYear = (year) => {
    setYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilteredYear={filteredYear} />
      <ExpenseItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date} />
      <ExpenseItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date} />
      <ExpenseItem title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date} />
      <ExpenseItem title={props.data[3].title} amount={props.data[3].amount} date={props.data[3].date} />
    </Card>
  );
}
