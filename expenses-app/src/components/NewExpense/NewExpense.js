import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import SunButton from "../UI/Controls/SunButton";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <Card className="new-expense">
      {!isEditing && (
        <SunButton variant="dark" onClick={startEditingHandler}>
          Add New Expense
        </SunButton>
      )}
      {isEditing && (
        <ExpenseForm
          onFormSubmit={props.onAddExpense}
          onCancel={stopEditingHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
