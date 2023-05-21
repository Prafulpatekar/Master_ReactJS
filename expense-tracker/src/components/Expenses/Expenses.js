import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses=(props)=> {
    const expenseArray = props.expenses;
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenseArray[0].title}
        amount={expenseArray[0].amount}
        date={expenseArray[0].date}
      />
      <ExpenseItem
        title={expenseArray[1].title}
        amount={expenseArray[1].amount}
        date={expenseArray[1].date}
      />
      <ExpenseItem
        title={expenseArray[2].title}
        amount={expenseArray[2].amount}
        date={expenseArray[2].date}
      />
      <ExpenseItem
        title={expenseArray[3].title}
        amount={expenseArray[3].amount}
        date={expenseArray[3].date}
      />
    </Card>
  );
}

export default Expenses;