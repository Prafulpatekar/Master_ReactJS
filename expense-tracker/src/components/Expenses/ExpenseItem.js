import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from 'react';
import "./ExpenseItem.css";
const ExpenseItem =(props)=> {
  const [ title,setTitle ] = useState(props.title);
  const clickHandler = ()=>{
    // alert("Clicked");
    
    setTitle(`Updated! `)

  };
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="title">{title}</h2>
        <div className="price">₹ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click BTN</button>
    </Card>
  );
}

export default ExpenseItem;
