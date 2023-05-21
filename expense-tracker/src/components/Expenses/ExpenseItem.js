import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React from "react";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2 className="title">{props.title}</h2>
          <div className="price">₹ {props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
