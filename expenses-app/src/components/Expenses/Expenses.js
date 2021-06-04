import React, { Fragment, useState } from "react";
import uuid from "react-uuid";
import "./Expenses.css";
import Card from "../UI/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import SunAlert from "../UI/Controls/SunAlert";
import axios from "../../data/FirebaseConnection";

const INITIAL_EXPENSES = [
  {
    id: uuid(),
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: uuid(),
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const Expenses = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [filteredYear, setFilteredYear] = useState(2021);
  const [showStatus, setShowStatus] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    title: "",
    message: "",
  });

  const addExpenseHandler = (expense) => {
    const newExpense = { ...expense, id: uuid(), date: new Date(expense.date) };
    setExpenses((prevState) => {
      return [newExpense, ...prevState];
    });
    console.log("Expense added");

    axios
      .post("/expenses.json", newExpense)
      .then((response) => {
        setStatusMessage({
          title: "Add Expense",
          message: "Expense have been added successfully.",
        });
        setShowStatus(true);
      })
      .catch((error) => {
        setStatusMessage({
          title: "Add Expense",
          message: "Error occurred while adding an expense.",
        });
        setShowStatus(true);
      });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(parseInt(selectedYear));
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === filteredYear;
  });

  const closeAlertHandler = () => {
    setShowStatus(false);
  };

  return (
    <Fragment>
      <SunAlert
        show={showStatus}
        title={statusMessage.title}
        message={statusMessage.message}
        closeAlert={closeAlertHandler}
      />

      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>

      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>

        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>

        <ExpensesList expenses={filteredExpenses}></ExpensesList>
      </Card>
    </Fragment>
  );
};

export default Expenses;
