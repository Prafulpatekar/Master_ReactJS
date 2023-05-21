import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    console.log("Selected Year in expenses comp", selectedYear);
    setYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterChange={filterChangeHandler} />
      {/* {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))} */}
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
