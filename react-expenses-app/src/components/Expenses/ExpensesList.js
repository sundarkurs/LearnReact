import React, { Fragment } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.length > 0 &&
        props.expenses.map((item, index) => {
          return <ExpenseItem key={item.id} expense={item}></ExpenseItem>;
        })}
    </ul>
  );
};

export default ExpensesList;
