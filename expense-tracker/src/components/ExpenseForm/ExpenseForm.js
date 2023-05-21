import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // ONE State method
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  // Multiple state method
  //   const [userInput, setUserInput] = useState({
  //     inputTitle: "",
  //     inputAmount: "",
  //     inputDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value); // ONE State method
    // MULTIPLE State method
    // setUserInput({
    //   ...userInput,
    //   inputTitle: event.target.value,
    // });
    // Previous state method
    // setUserInput((prevState) => {
    //   return { ...prevState, inputTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   inputAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   inputDate: event.target.value,
    // });
  };
  const onSubmitHandler = (event)=>{
    event.preventDefault();
    const expenseData = {
      title:inputTitle,
      amout:inputAmount,
      date:new Date(inputDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setInputTitle('');
    setInputAmount('');
    setInputDate('');

  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" value={inputTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            onChange={dateChangeHandler}
            min="2023-04-01"
            max="2024-03-31"
            value={inputDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
