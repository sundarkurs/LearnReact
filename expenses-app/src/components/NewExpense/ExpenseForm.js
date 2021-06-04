import React, { useState } from "react";
import "./ExpenseForm.css";
import SunButton from "../UI/Controls/SunButton";
import SunActions from "../UI/Controls/SunActions";
import SunInput from "../UI/Controls/SunInput";
import SunLabel from "../UI/Controls/SunLabel";

let IS_FORM_VALID = true;

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isFormVallid()) {
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);

    props.onFormSubmit(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const vlaidateForm = () => {
    IS_FORM_VALID = true;

    if (enteredTitle.trim().length === 0) {
      setIsTitleValid(false);
      IS_FORM_VALID = false;
    } else {
      setIsTitleValid(true);
    }

    if (enteredAmount === "" || enteredAmount === "-" || enteredAmount <= 0) {
      setIsAmountValid(false);
      IS_FORM_VALID = false;
    } else {
      setIsAmountValid(true);
    }

    if (enteredDate === "") {
      setIsDateValid(false);
      IS_FORM_VALID = false;
    } else {
      setIsDateValid(true);
    }
  };

  const isFormVallid = () => {
    vlaidateForm();

    return IS_FORM_VALID;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <SunLabel htmlFor="title">Title</SunLabel>
          <SunInput
            name="title"
            type="text"
            placeholder="Enter expense title"
            value={enteredTitle}
            onChange={(e) => setEnteredTitle(e.target.value)}
            invalid={!isTitleValid}
          ></SunInput>
        </div>
        <div className="new-expense__control">
          <SunLabel htmlFor="amount">Amount</SunLabel>
          <SunInput
            name="amount"
            type="number"
            step="0.1"
            placeholder="Enter amount"
            value={enteredAmount}
            onChange={(e) => setEnteredAmount(e.target.value)}
            invalid={!isAmountValid}
          ></SunInput>
        </div>
        <div className="new-expense__control">
          <SunLabel htmlFor="date">Date</SunLabel>
          <SunInput
            name="date"
            type="date"
            value={enteredDate}
            onChange={(e) => setEnteredDate(e.target.value)}
            invalid={!isDateValid}
          ></SunInput>
        </div>
      </div>
      <SunActions>
        <SunButton variant="secondary" onClick={props.onCancel}>
          Cancel
        </SunButton>
        <SunButton type="submit" variant="primary">
          Save
        </SunButton>
      </SunActions>
    </form>
  );
};

export default ExpenseForm;
