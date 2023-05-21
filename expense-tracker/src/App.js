import { useState } from "react";
import NewExpense from "./components/ExpenseForm/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const DATA = [
    {
      id: "e1",
      title: "Room Rent",
      amount: 3500,
      date: new Date(2023, 4, 20),
    },
    {
      id: "e2",
      title: "Grocery",
      amount: 150,
      date: new Date(2022, 4, 10),
    },
    {
      id: "e3",
      title: "Food & Drinks",
      amount: 311,
      date: new Date(2021, 4, 13),
    },
    {
      id: "e4",
      title: "Other",
      amount: 200,
      date: new Date(2023, 4, 21),
    },
  ];
  const [expenses, setData] = useState(DATA);
  const addExpenseHandler = (expense) => {
    const { title, amount, date } = expense;
    if (!title || !amount || !date) {
      alert("All fields are mandatory!");
    } else {
      setData((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    }
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
