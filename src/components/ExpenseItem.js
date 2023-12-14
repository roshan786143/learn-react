import "./ExpenseItem.css"

const ExpenseItem = ({ expenseItem }) => {
    console.log(expenseItem);
    // const { expenseItems } = props;
    const {date, insurance, price, LocationOfExpenditure } = expenseItem;

  return (
    <>
      <div className="expense-item">
        <div>{date}</div>
        <div className="expense-item__description">
            <h2>{insurance}</h2>
        </div>
        <div className="expense-item__price">{price}</div>
        <div className="LocationOfExpenditure">{LocationOfExpenditure}</div>
      </div>
      </>
  );
};

export default ExpenseItem;