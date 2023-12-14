const ExpenseItem = () => {
  return (
    <>
      <h2 style={{ color: "green" }}>Expense Items</h2>
      <h3>Food Rs 10</h3>
      <h3>Petrol Rs 100</h3>
      <h3>Movies Rs 200</h3>
      <h3>{Date()}</h3>
    </>
  );
};

export default ExpenseItem;