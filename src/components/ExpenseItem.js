import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    const {date, insurance, price, LocationOfExpenditure } = props
    console.log(date);
    console.log(insurance);
    console.log(price);
    console.log(LocationOfExpenditure );
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