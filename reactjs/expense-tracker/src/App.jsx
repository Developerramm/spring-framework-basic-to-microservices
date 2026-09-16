import React, { useEffect, useState } from "react";
import ExpenseTrackerForm from "./components/ExpenseTrackerForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpense] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpense((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpense((prev) => prev.filter((item) => item.id != id));
  };

  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="container">
      <div className="row">
        <ExpenseTrackerForm onAddExpense={addExpense} />

        <ExpenseList
          expenses={expenses}
          onDelete={deleteExpense}
          totalExpense={totalExpense}
        />
      </div>
    </div>
  );
};

export default App;
