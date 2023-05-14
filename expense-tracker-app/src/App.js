import Expenses from "./components/Expenses/Expenses";

const App = ()=> {
  const expenseArray = [
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
      date: new Date(2023, 4, 10),
    },
    {
      id: "e3",
      title: "Food & Drinks",
      amount: 311,
      date: new Date(2023, 4, 13),
    },
    {
      id: "e4",
      title: "Other",
      amount: 200,
      date: new Date(2023, 4, 21),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>Praful.Coder is cool!</p>
      <Expenses expenses={expenseArray}/>
    </div>
  );
}

export default App;
