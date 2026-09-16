import React, { useRef, useState } from "react";

const ExpenseTrackerForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return alert("please fill all the fields");
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };

    onAddExpense(newExpense);
    setTitle("");
    setAmount("");

    titleRef.current.focus();
  };
  return (
    <div className="col-md-6  mb-5">
      <h3 className="text-center mb-5">Expense Tracker</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control text-center"
            placeholder="Expense title"
            ref={titleRef}
          />
        </div>
        <div className="mb-3">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            className="form-control text-center"
            placeholder="Expense amount"
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseTrackerForm;
