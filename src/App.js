import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const date = new Date().toUTCString();
  const insurance = "Car Insurance";
  const price = "$300.62";
  const LocationOfExpenditure = "Food";
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem date = {date} insurance = {insurance} price = {price} LocationOfExpenditure = {LocationOfExpenditure}/>
        <h2 style={{color: "hotpink"}}>Roshan Shaik</h2>
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
}

export default App;
