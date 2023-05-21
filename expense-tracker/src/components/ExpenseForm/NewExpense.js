import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseData = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEdited(!isEdited)
  };
  const [isEdited, setIsEdited] = useState(false);
  const onFormEditHandler = (event) => {setIsEdited(!isEdited)};
  let content = (
    <button className="new-expense__actions" onClick={onFormEditHandler}>
      + Expense
    </button>
  );
  if (isEdited) {
    content = <ExpenseForm onSaveExpenseData={saveExpenseData} formHandler={onFormEditHandler} />;
  }
  return (
    <div className="new-expense ">
      {content}
    </div>
  );
};

export default NewExpense;
