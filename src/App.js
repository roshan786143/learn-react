import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenseItems = [
    {
      date: new Date().toUTCString(),
      insurance: "Car Insurance",
      price: "$300.62",
      LocationOfExpenditure: "Food",
    },
    {
      date: new Date().toUTCString(),
      insurance: "Bike Insurance",
      price: "$100.42",
      LocationOfExpenditure: "Cosmetics",
    },
    {
      date: new Date().toUTCString(),
      insurance: "LIC",
      price: "$60.32",
      LocationOfExpenditure: "Home",
    },
    {
      date: new Date().toUTCString(),
      insurance: "Home Insurance",
      price: "$600.62",
      LocationOfExpenditure: "Travel",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {expenseItems.map((expenseItem, index) => {
          console.log('Roshan Shaik');
          return <ExpenseItem key={index} expenseItem={expenseItem} />;
        })}
        <h2 style={{ color: "hotpink" }}>Roshan Shaik</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
